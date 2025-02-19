export interface DiscountCode {
  code: string
  description: string
  discount: number // Percentage discount
  minOrderValue?: number
  maxDiscount?: number
}

export const discountCodes: DiscountCode[] = [
  {
    code: "DIS10",
    description: "Giảm 10% cho đơn hàng từ 200,000đ",
    discount: 10,
    minOrderValue: 200000,
    maxDiscount: 50000,
  },
  {
    code: "SUMMER2023",
    description: "Giảm 15% cho đơn hàng từ 500,000đ",
    discount: 15,
    minOrderValue: 500000,
    maxDiscount: 100000,
  },
  {
    code: "SPECIAL20",
    description: "Giảm 20% cho đơn hàng từ 2,000,000đ",
    discount: 20,
    minOrderValue: 2000000,
  },
]

