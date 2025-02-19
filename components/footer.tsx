import Link from "next/link"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C2C2C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Hôm Nay Ăn Gì?</h3>
            <p className="text-sm text-gray-400">
              Khám phá ẩm thực Việt Nam với dịch vụ đặt bàn trực tuyến của chúng tôi.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Liên kết nhanh</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#FFC107]">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#FFC107]">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#FFC107]">
                  Liên hệ
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-[#FFC107]">
                  Điều khoản sử dụng
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Kết nối với chúng tôi</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#FFC107]">
                <Facebook />
              </a>
              <a href="#" className="hover:text-[#FFC107]">
                <Instagram />
              </a>
              <a href="#" className="hover:text-[#FFC107]">
                <Twitter />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2023 Hôm Nay Ăn Gì? Bảo lưu mọi quyền.
        </div>
      </div>
    </footer>
  )
}

