"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { Dish, Restaurant } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { StarIcon, Clock } from "lucide-react"
import BookingForm from "./booking-form"
import { DiscountCode } from "@/data/discountCodes"

interface RestaurantModalProps {
  restaurant: Restaurant | null;
  dish: Dish | null
  open: boolean;
  onClose: () => void;
}

export default function RestaurantModal({ restaurant, open, onClose }: RestaurantModalProps) {
  const [showBookingForm, setShowBookingForm] = useState(false)
  const [selectedDishes, setSelectedDishes] = useState<{ [key: string]: number }>({})
  const [selectedDiscount, setSelectedDiscount] = useState<DiscountCode | null>(null)

  if (!restaurant) return null

  const handleQuantityChange = (dishId: string, quantity: number) => {
    setSelectedDishes((prev) => ({
      ...prev,
      [dishId]: Math.max(0, quantity),
    }))
  }

  const subtotal = Object.entries(selectedDishes).reduce((total, [dishId, quantity]) => {
    const dish = restaurant.dishes.find((d) => d.id === dishId)
    return total + (dish ? dish.price * quantity : 0)
  }, 0)

  const discountAmount = selectedDiscount ? Math.min((subtotal * selectedDiscount.discount) / 100, selectedDiscount.maxDiscount || Number.POSITIVE_INFINITY) : 0
  const totalPrice = subtotal - discountAmount

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>{restaurant.name}</DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          <div className="flex gap-4">
            <img
              src={restaurant.images[0] || "/placeholder.svg"}
              alt={restaurant.name}
              className="w-40 h-40 object-cover rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-semibold mb-2">{restaurant.name}</h3>
              <p className="text-muted-foreground mb-2">{restaurant.location}</p>
              <div className="flex items-center gap-2 mb-2">
                <StarIcon className="w-5 h-5 fill-yellow-400 stroke-yellow-400" />
                <span className="font-medium">{restaurant.rating}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4" />
                <span>
                  {restaurant.openingHours.open} - {restaurant.openingHours.close}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Mô tả</h4>
            <p className="text-muted-foreground">{restaurant.description}</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Thực đơn</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {restaurant.dishes.map((dish) => (
                <Card key={dish.id} className={dish.isFeatured ? "border-[#FF7A00]" : ""}>
                  <CardContent className="p-4">
                    <div className="flex gap-4">
                      <img
                        src={dish.image || "/placeholder.svg"}
                        alt={dish.name}
                        className="w-24 h-24 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h5 className="font-semibold">{dish.name}</h5>
                          {dish.isFeatured && (
                            <Badge variant="secondary" className="bg-[#FF7A00] text-white">
                              Món nổi bật
                            </Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{dish.description}</p>
                        <p className="font-medium text-[#FF7A00]">
                          {new Intl.NumberFormat("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          }).format(dish.price)}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center justify-end gap-2">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleQuantityChange(dish.id, (selectedDishes[dish.id] || 0) - 1)}
                      >
                        -
                      </Button>
                      <Input
                        type="number"
                        min="0"
                        value={selectedDishes[dish.id] || 0}
                        onChange={(e) => handleQuantityChange(dish.id, Number.parseInt(e.target.value) || 0)}
                        className="w-16 text-center"
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => handleQuantityChange(dish.id, (selectedDishes[dish.id] || 0) + 1)}
                      >
                        +
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">
              Tổng cộng:{" "}
              {new Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
              }).format(totalPrice)}
            </div>
            <Button
              className="bg-[#FF7A00] hover:bg-[#FF7A00]/90"
              onClick={() => setShowBookingForm(true)}
              disabled={totalPrice === 0}
            >
              Đặt bàn ngay
            </Button>
          </div>

          {showBookingForm && (
            <BookingForm
              restaurantId={restaurant.id}
              selectedDishes={selectedDishes}
              totalPrice={totalPrice}
              onSuccess={() => {
                setShowBookingForm(false)
                onClose()
              }}
              onDiscountApply={setSelectedDiscount} 
            />
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}

