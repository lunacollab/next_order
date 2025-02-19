import { Button } from "@/components/ui/button";


export default function Hero() {
  return (
    <div className="relative h-[500px] bg-[#FFFC94] overflow-hidden">
      <div className="absolute inset-0 " />
      <div className="container mx-auto px-4 h-full flex items-center justify-between relative z-10">
        <div className="max-w-lg w-1/2">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Hôm Nay Ăn Gì?
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Khám phá hương vị truyền thống với những món ăn đặc sắc từ khắp mọi
            miền tổ quốc
          </p>
          <div className="flex gap-4">
            <Button className="bg-[#FF7A00] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#FF7A00]/90 transition-colors">
              Xem Thực Đơn
            </Button>
            <Button
              variant="outline"
              className="bg-white/10 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
            >
              Tìm Hiểu Thêm
            </Button>
          </div>
        </div>

        <div className="w-1/2 flex justify-end">
          <img
            src="/z6332186786803_f8fcf1006295082f84c81b50be6ecdc9-removebg-preview.png"
            alt="Hình minh họa"
            className="w-[800px] h-[600px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
