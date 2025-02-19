"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import type { Restaurant } from "@/types";
import { StarIcon } from "lucide-react";
import { useState } from "react";
import BookingModal from "./booking-modal";

interface RestaurantGridProps {
  initialRestaurants: Restaurant[];
}

export default function RestaurantGrid({
  initialRestaurants,
}: RestaurantGridProps) {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<Restaurant | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
      {initialRestaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          className="overflow-hidden hover:shadow-lg transition-shadow"
        >
          <div className="aspect-video relative overflow-hidden">
            <div className="image-gallery">
              {restaurant.images && restaurant.images.length > 0 ? (
                restaurant.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Restaurant image ${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                ))
              ) : (
                <img
                  src="/placeholder.svg"
                  alt="Placeholder"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
          </div>
          <CardContent className="p-4">
            <h3 className="text-lg font-semibold mb-2">{restaurant.name}</h3>
            <p className="text-sm text-muted-foreground mb-2">
              {restaurant.description}
            </p>
            <div className="flex items-center gap-2">
              <StarIcon className="w-4 h-4 fill-yellow-400 stroke-yellow-400" />
              <span className="text-sm">{restaurant.rating}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              {restaurant.priceRange}
            </p>
          </CardContent>
          <CardFooter className="p-4 pt-0">
            <Button
              className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-white"
              onClick={() => setSelectedRestaurant(restaurant)}
            >
              Đặt bàn ngay
            </Button>
          </CardFooter>
        </Card>
      ))}

      <BookingModal
        restaurant={selectedRestaurant}
        open={!!selectedRestaurant}
        onClose={() => setSelectedRestaurant(null)}
      />
    </div>
  );
}
