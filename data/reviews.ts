import type { Review } from "@/types"

export const reviews: Review[] = [
  {
    id: "1",
    restaurantId: "1",
    userName: "Nguyễn Văn A",
    rating: 5,
    comment: "Món ăn ngon, phục vụ chu đáo. Sẽ quay lại lần sau!",
    date: "2023-06-15",
  },
  {
    id: "2",
    restaurantId: "1",
    userName: "Trần Thị B",
    rating: 4,
    comment: "Không gian đẹp, món ăn ngon nhưng giá hơi cao.",
    date: "2023-06-10",
  },
  {
    id: "3",
    restaurantId: "2",
    userName: "Lê Văn C",
    rating: 4,
    comment: "Món ăn ngon, giá cả phải chăng. Sẽ giới thiệu cho bạn bè.",
    date: "2023-06-12",
  },
  // Add more reviews...
]

