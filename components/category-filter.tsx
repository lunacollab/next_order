"use client"

import { Button } from "@/components/ui/button"

const categories = ["Tất cả", "Hải sản", "Việt Nam", "Nhật Bản", "Hàn Quốc", "Âu"]

export default function CategoryFilter() {
  return (
    <div className="flex gap-2 overflow-x-auto py-4 scrollbar-hide">
      {categories.map((category) => (
        <Button key={category} variant="outline" className="whitespace-nowrap rounded-full">
          {category}
        </Button>
      ))}
    </div>
  )
}

