"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function ConfirmBookingPage() {
  const { bookingId } = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const [confirmed, setConfirmed] = useState(false)

  useEffect(() => {
    // In a real application, you would make an API call to confirm the booking
    const confirmBooking = async () => {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))
        setConfirmed(true)
        toast({
          title: "Đặt bàn đã được xác nhận!",
          description: "Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi.",
        })
      } catch (error) {
        toast({
          title: "Có lỗi xảy ra",
          description: "Không thể xác nhận đặt bàn. Vui lòng thử lại sau.",
          variant: "destructive",
        })
      }
    }

    confirmBooking()
  }, [toast])

  const handleReturnHome = () => {
    router.push("/")
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Xác nhận đặt bàn</h1>
      {confirmed ? (
        <div>
          <p className="mb-4">
            Đặt bàn của bạn đã được xác nhận thành công. Cảm ơn bạn đã sử dụng dịch vụ của chúng tôi!
          </p>
          <Button onClick={handleReturnHome}>Quay về trang chủ</Button>
        </div>
      ) : (
        <p>Đang xác nhận đặt bàn của bạn...</p>
      )}
    </div>
  )
}

