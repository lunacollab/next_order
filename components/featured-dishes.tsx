"use client"

import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import type { Restaurant } from "@/types"
import RestaurantModal from "./restaurant-modal"

interface FeaturedDishesProps {
  restaurants: Restaurant[]
}

export default function FeaturedDishes({ restaurants }: FeaturedDishesProps) {
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)

  const featuredDishes = restaurants
    .map((restaurant) => {
      const featuredDish = restaurant.dishes.find((dish) => dish.isFeatured)
      return featuredDish ? { ...featuredDish, restaurantId: restaurant.id, restaurantName: restaurant.name } : null
    })
    .filter((dish): dish is NonNullable<typeof dish> => dish !== null)

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Món Ăn Nổi Bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredDishes.map((dish) => (
          <Card key={dish.id} className="overflow-hidden group">
            <div className="aspect-video relative overflow-hidden">
              <img
                src={dish.image || "/placeholder.svg"}
                alt={dish.name}
                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <CardContent className="p-4">
              <h3 className="text-xl font-semibold mb-2">{dish.name}</h3>
              <p className="text-sm text-muted-foreground">{dish.description}</p>
              <p className="text-lg font-medium mt-2 text-[#FF7A00]">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(dish.price)}
              </p>
              <p className="text-sm text-muted-foreground mt-1">Nhà hàng: {dish.restaurantName}</p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white"
                onClick={() => setSelectedRestaurant(restaurants.find((r) => r.id === dish.restaurantId) || null)}
              >
                Đặt Món
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <RestaurantModal
        restaurant={selectedRestaurant}
        open={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)} dish={null}      />
    </div>
  )
}

