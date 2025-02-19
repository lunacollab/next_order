"use client"
import { Suspense, useState } from "react"
import Hero from "@/components/hero"
import FeaturedDishes from "@/components/featured-dishes"
import { restaurants } from "@/data/restaurants"
import Header from "@/components/header"

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (term: string) => {
    setSearchTerm(term)
  }
  return (
    <main className="min-h-screen bg-background">
      <Header onSearch={handleSearch} />
      <Hero />
      <div className="container mx-auto px-4 py-8">
        <Suspense fallback={<div>Đang tải...</div>}>
        <FeaturedDishes restaurants={restaurants} searchTerm={searchTerm} />
        </Suspense>
      </div>
    </main>
  )
}

