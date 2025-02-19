"use client"

import type React from "react"

import { useState,useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useToast } from "@/components/ui/use-toast"
import { sendBookingConfirmationEmail } from "@/lib/email-service"
import { discountCodes, type DiscountCode } from "@/data/discountCodes"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface BookingFormProps {
  restaurantId: string
  selectedDishes: { [key: string]: number }
  totalPrice: number
  onSuccess: () => void
  onDiscountApply: (discount: DiscountCode | null) => void
}

export default function BookingForm({ restaurantId, selectedDishes, totalPrice, onSuccess , onDiscountApply}: BookingFormProps) {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [finalPrice, setFinalPrice] = useState(totalPrice)
  const [formData, setFormData] = useState({
    phoneNumber: "",
    email: "",
    date: "",
    time: "",
    discountCode: "",
  })
  const [selectedDiscount, setSelectedDiscount] = useState<DiscountCode | null>(null)
  
  useEffect(() => {
    if (selectedDiscount && totalPrice < (selectedDiscount.minOrderValue || 0)) {
      setSelectedDiscount(null)
      setFormData((prev) => ({ ...prev, discountCode: "" }))
    }
  }, [totalPrice, selectedDiscount])
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Calculate final price with discount
      let finalPrice = totalPrice
      if (selectedDiscount) {
        const discountAmount = (totalPrice * selectedDiscount.discount) / 100
        const maxDiscount = selectedDiscount.maxDiscount || Number.POSITIVE_INFINITY
        finalPrice -= Math.min(discountAmount, maxDiscount)
      }

      // Here you would make an API call to save the booking
      const bookingId = "BOOKING-" + Math.random().toString(36).substr(2, 9)

      // Send confirmation email
      await sendBookingConfirmationEmail({
        to: formData.email,
        bookingId,
        restaurantId,
        selectedDishes,
        date: formData.date,
        time: formData.time,
        originalPrice: totalPrice,
        discount: selectedDiscount
          ? {
              amount: selectedDiscount.discount,
              type: "percentage",
              code: selectedDiscount.code,
            }
          : {
              amount: 0,
              type: "percentage",
            },
        finalPrice,
      });

      toast({
        title: "Đặt bàn thành công!",
        description: "Vui lòng kiểm tra email để xác nhận đặt bàn.",
      })
      onSuccess()
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      })
    } finally {
      setLoading(false)
    }
  }

  const handleDiscountChange = (code: string) => {
    const discount = discountCodes.find((d) => d.code === code) || null
    onDiscountApply(discount) 
    setFormData((prev) => ({ ...prev, discountCode: code }))
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mt-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phoneNumber">Số điện thoại</Label>
          <Input
            id="phoneNumber"
            type="tel"
            required
            placeholder="0912345678"
            value={formData.phoneNumber}
            onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            placeholder="email@example.com"
            value={formData.email}
            onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="date">Ngày đặt</Label>
          <Input
            id="date"
            type="date"
            required
            value={formData.date}
            onChange={(e) => setFormData((prev) => ({ ...prev, date: e.target.value }))}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="time">Giờ đặt</Label>
          <Input
            id="time"
            type="time"
            required
            value={formData.time}
            onChange={(e) => setFormData((prev) => ({ ...prev, time: e.target.value }))}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="discountCode">Mã giảm giá</Label>
        <Select onValueChange={handleDiscountChange} value={formData.discountCode}>
  <SelectTrigger>
    <SelectValue placeholder="Chọn mã giảm giá" />
  </SelectTrigger>
  <SelectContent>
  {discountCodes.map((discount) => {
  const minOrderValue = discount.minOrderValue ?? 0 
  const isDisabled = totalPrice < minOrderValue

  return (
    <SelectItem key={discount.code} value={discount.code} disabled={isDisabled} className="bg-white">
      {discount.code} - {discount.description}{" "}
      {isDisabled && `(Yêu cầu đơn hàng tối thiểu ${minOrderValue.toLocaleString()} VND)`}
    </SelectItem>
  )
})}

  </SelectContent>
</Select>
      </div>

      {selectedDiscount && (
        <div className="text-sm text-green-600">Bạn đã áp dụng mã giảm giá: {selectedDiscount.description}</div>
      )}

      <Button type="submit" className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90" disabled={loading}>
        {loading ? "Đang xử lý..." : "Xác nhận đặt bàn"}
      </Button>
    </form>
  )
}

