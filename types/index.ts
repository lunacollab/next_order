export interface Dish {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
}

export interface RestaurantDish extends Dish {
  isFeatured: boolean
}

export interface Restaurant {
  priceRange: React.ReactNode
  id: string
  name: string
  location: string
  description: string
  rating: number
  openingHours: {
    open: string
    close: string
  }
  images: string[]
  dishes: RestaurantDish[]
}

export interface Booking {
  id: string
  restaurantId: string
  dishes: {
    dishId: string
    quantity: number
  }[]
  phoneNumber: string
  date: string
  time: string
  status: "pending" | "confirmed" | "cancelled"
  email: string
  voucherCode?: string
}

// @/types.ts (hoặc types.d.ts)

export type Review = {
  id: string;
  restaurantId: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
};


export interface BookingFormData {
  phoneNumber: string
  date: string
  time: string
  numberOfGuests: number
  specialRequests?: string
  voucherCode?: string
}
