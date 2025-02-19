import { Suspense } from "react"
import Hero from "@/components/hero"
import FeaturedDishes from "@/components/featured-dishes"
import { restaurants } from "@/data/restaurants"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Đang tải...</div>}>
          <FeaturedDishes restaurants={restaurants} />
        </Suspense>
      </div>
    </main>
  )
}

