"use server"
import nodemailer from "nodemailer"
import { restaurants } from "./restaurants"

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number.parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
})

interface SendEmailParams {
  to: string
  subject: string
  body: string
}

export async function sendEmail({ to, subject, body }: SendEmailParams) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html: body,
    })

    console.log("Email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Error sending email:", error)
    throw error
  }
}

interface BookingConfirmationParams {
  to: string
  bookingId: string
  restaurantId: string
  selectedDishes: { [key: string]: number }
  date: string
  time: string
  originalPrice: number
  discount: {
    amount: number
    type: 'percentage' | 'fixed'
    code?: string
    minOrderValue?: number
    maxDiscount?: number
  } | null
  finalPrice: number
}

export async function sendBookingConfirmationEmail(params: BookingConfirmationParams) {
  const confirmationLink = `${process.env.NEXT_PUBLIC_BASE_URL}/confirm-booking/${params.bookingId}`

  const dishList = Object.entries(params.selectedDishes)
    .map(([dishId, quantity]) => {
      const dish = restaurants.find((r) => r.id === params.restaurantId)?.dishes.find((d) => d.id === dishId)
      return dish ? `<li>${dish.name} x ${quantity}</li>` : ""
    })
    .join("")

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("vi-VN", { 
      style: "currency", 
      currency: "VND" 
    }).format(amount)
  }

  let discountText = "";
  if (params.discount && params.discount.amount > 0) {
    const meetsMinOrder = params.originalPrice >= (params.discount.minOrderValue || 0);
    if (meetsMinOrder) {
      const discountAmount = params.discount.type === 'percentage' 
        ? (params.originalPrice * params.discount.amount) / 100 
        : params.discount.amount;
      const appliedDiscount = Math.min(discountAmount, params.discount.maxDiscount || discountAmount);
      
      discountText = `
        <li>Mã giảm giá: ${params.discount.code || "Không có"}</li>
        <li>Giảm giá: ${params.discount.type === 'percentage' 
          ? `${params.discount.amount}% (-${formatCurrency(appliedDiscount)})` 
          : `-${formatCurrency(appliedDiscount)}`}</li>
      `;
    }
  }

  const emailContent = `
    <h1>Xác nhận đặt bàn</h1>
    <p>Xin chào,</p>
    <p>Cảm ơn bạn đã đặt bàn tại nhà hàng của chúng tôi.</p>
    <h2>Chi tiết đặt bàn:</h2>
    <ul>
      <li>Mã đặt bàn: ${params.bookingId}</li>
      <li>Ngày: ${params.date}</li>
      <li>Giờ: ${params.time}</li>
      <li>Món ăn đã chọn:</li>
      <ul>
        ${dishList}
      </ul>
      <li>Tạm tính: ${formatCurrency(params.originalPrice)}</li>
      ${discountText}
      <li><strong>Tổng thanh toán: ${formatCurrency(params.finalPrice)}</strong></li>
    </ul>
    <p>Vui lòng nhấn vào đường link sau để xác nhận đặt bàn:</p>
    <a href="${confirmationLink}">${confirmationLink}</a>
    <p>Nếu bạn không thực hiện đặt bàn này, vui lòng bỏ qua email này.</p>
    <p>Trân trọng,<br>Đội ngũ Hôm Nay Ăn Gì?</p>
  `

  return sendEmail({
    to: params.to,
    subject: "Xác nhận đặt bàn - Vui lòng xác thực",
    body: emailContent,
  })
}
