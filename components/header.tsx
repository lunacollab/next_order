import { Search, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

interface HeaderProps {
  onSearch: (searchTerm: string) => void
}
export default function Header({ onSearch }: HeaderProps) {
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }
  return (
    <header className="bg-[#FFC107] py-4">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            Hôm Nay Ăn Gì?
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Tìm kiếm món ăn..."
                className="pl-10 pr-4 py-2 rounded-full bg-white/90 text-gray-800"
                onChange={handleSearch}
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
            </div>
          </div>
          <Button variant="ghost" className="md:hidden text-white">
            <Menu />
          </Button>
        </div>
      </div>
    </header>
  );
}
