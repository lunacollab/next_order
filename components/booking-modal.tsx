"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import type { BookingFormData, Restaurant } from "@/types";
import { useState } from "react";

interface BookingModalProps {
  restaurant: Restaurant | null;
  open: boolean;
  onClose: () => void;
}

export default function BookingModal({
  restaurant,
  open,
  onClose,
}: BookingModalProps) {
  const { toast } = useToast();
  const [formData, setFormData] = useState<BookingFormData>({
    phoneNumber: "",
    date: "",
    time: "",
    numberOfGuests: 1,
    specialRequests: "",
    voucherCode: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Here you would typically make an API call to save the booking
      // For now, we'll just show a success message
      toast({
        title: "Đặt bàn thành công!",
        description: "Vui lòng kiểm tra email để xác nhận đặt bàn.",
      });
      onClose();
    } catch (error) {
      toast({
        title: "Có lỗi xảy ra",
        description: "Vui lòng thử lại sau.",
        variant: "destructive",
      });
    }
  };

  if (!restaurant) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Đặt bàn tại {restaurant.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Số điện thoại</Label>
            <Input
              id="phoneNumber"
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  phoneNumber: e.target.value,
                }))
              }
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Ngày đặt bàn</Label>
              <Input
                id="date"
                type="date"
                required
                value={formData.date}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, date: e.target.value }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Giờ đặt bàn</Label>
              <Input
                id="time"
                type="time"
                required
                value={formData.time}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, time: e.target.value }))
                }
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="voucherCode">Mã giảm giá (nếu có)</Label>
            <Input
              id="voucherCode"
              value={formData.voucherCode}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  voucherCode: e.target.value,
                }))
              }
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-[#FF7A00] hover:bg-[#FF7A00]/90 text-[#FFFFFF]"
          >
            Xác nhận đặt bàn
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
