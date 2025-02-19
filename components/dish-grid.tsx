"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Dish } from "@/types";
import { useState } from "react";
import RestaurantModal from "./restaurant-modal";

interface DishGridProps {
  initialDishes: Dish[];
}

export default function DishGrid({ initialDishes }: DishGridProps) {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Món Ăn Nổi Bật</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {initialDishes.map((dish) => (
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
              <p className="text-sm text-muted-foreground">
                {dish.description}
              </p>
              <p className="text-lg font-medium mt-2">
                {new Intl.NumberFormat("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }).format(dish.price)}
              </p>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button
                className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white"
                onClick={() => setSelectedDish(dish)}
              >
                Đặt Món
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <RestaurantModal
        dish={selectedDish}
        open={!!selectedDish}
        onClose={() => setSelectedDish(null)}
        restaurant={null}
      />
    </div>
  );
}
