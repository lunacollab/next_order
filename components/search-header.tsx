"use client"

import { Input } from "@/components/ui/input"

export default function SearchHeader() {
  return (
    <div className="flex items-center gap-4">
      <Input placeholder="Tìm kiếm nhà hàng..." className="flex-1" />
      {/* Add other search options here if needed */}
    </div>
  )
}

