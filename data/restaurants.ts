import { Restaurant } from "@/types";

export const restaurants: Restaurant[] = [
  // Nhà hàng đầu tiên và thứ hai như cũ
  {
    id: "1",
    name: "Nhà Hàng Việt Phố",
    location: "123 Lê Lợi, Quận Hải Châu, TP.Đà Nẵng",
    description: "Nhà hàng Việt Nam truyền thống với không gian ấm cúng",
    rating: 4.5,
    openingHours: {
      open: "07:00",
      close: "22:00",
    },
    images: ["https://i.pinimg.com/736x/ff/af/0f/ffaf0f6e4eaab4a1f1f5bce1fbdba039.jpg", "/placeholder.svg?height=400&width=600"],
    dishes: [
      {
        id: "1",
        name: "Phở Bò Tái",
        description: "Phở bò truyền thống với nước dùng đậm đà, thịt bò tái và các loại rau thơm",
        price: 85000,
        image: "https://i.pinimg.com/736x/fa/8e/7e/fa8e7e4b9d6a105b17e903468f7ed952.jpg",
        category: "Món súp",
        isFeatured: true,
      },
      {
        id: "2",
        name: "Bánh Mì Thịt Nướng",
        description: "Bánh mì giòn với thịt nướng, rau củ và sốt đặc biệt",
        price: 45000,
        image: "https://i.pinimg.com/736x/0d/96/53/0d9653f61c292e1836ceee24790e6872.jpg",
        category: "Món nhanh",
        isFeatured: false,
      },
      {
        id: "3",
        name: "Gỏi Cuốn Tôm Thịt",
        description: "Gỏi cuốn tươi mát với tôm, thịt heo, bún và rau sống",
        price: 65000,
        image: "https://i.pinimg.com/736x/f7/57/6b/f7576bc886c91729b6853c4ae1fc91db.jpg",
        category: "Khai vị",
        isFeatured: false,
      },
      {
        id: "4",
        name: "Cơm Tấm Sườn Nướng",
        description: "Cơm tấm với sườn nướng, bì, chả, trứng ốp la và đồ chua",
        price: 75000,
        image: "https://i.pinimg.com/736x/fd/7d/c2/fd7dc23df4bf5861e1cd68d91a00a2e9.jpg",
        category: "Món chính",
        isFeatured: false,
      },
      {
        id: "5",
        name: "Chè Ba Màu",
        description: "Chè ba màu truyền thống với đậu, nước cốt dừa và đá bào",
        price: 35000,
        image: "https://i.pinimg.com/736x/37/13/87/371387cd4dc78745187c97847cb453fd.jpg",
        category: "Tráng miệng",
        isFeatured: false,
      },
    ],
    priceRange: undefined
  },
  {
    id: "2",
    name: "Quán Ăn Ngon",
    location: "456 Nguyễn Huệ, Hải Châu, TP.Đà Nẵng",
    description: "Quán ăn bình dân với đa dạng món ăn Việt Nam",
    rating: 4.2,
    openingHours: {
      open: "06:00",
      close: "23:00",
    },
    images: ["https://i.pinimg.com/736x/8b/86/ed/8b86ed4f07c65c143eb515e1ae9ab338.jpg", "/placeholder.svg?height=400&width=600"],
    dishes: [
      {
        id: "6",
        name: "Bún Chả Hà Nội",
        description: "Bún chả với thịt nướng, chả giò, nước mắm pha và rau sống",
        price: 70000,
        image: "https://i.pinimg.com/736x/8f/95/c2/8f95c217ba2d2346b499f9772ec15d3a.jpg",
        category: "Món chính",
        isFeatured: true,
      },
      {
        id: "7",
        name: "Bánh Xèo",
        description: "Bánh xèo giòn với tôm, thịt, giá đỗ và rau sống",
        price: 60000,
        image: "https://i.pinimg.com/736x/05/08/22/0508226df92f4142601a8b640171ea3d.jpg",
        category: "Món chính",
        isFeatured: false,
      },
      {
        id: "8",
        name: "Gỏi Ngó Sen Tôm Thịt",
        description: "Gỏi ngó sen tươi mát với tôm, thịt heo và các loại rau thơm",
        price: 55000,
        image: "https://i.pinimg.com/736x/16/e7/80/16e780450a3b1bf46bda50fc695a6807.jpg",
        category: "Khai vị",
        isFeatured: false,
      },
      {
        id: "9",
        name: "Cà Phê Sữa Đá",
        description: "Cà phê đen đậm đà pha với sữa đặc và đá",
        price: 30000,
        image: "https://i.pinimg.com/736x/95/53/60/9553607d810f7d553ca1decb515c4dd7.jpg",
        category: "Đồ uống",
        isFeatured: false,
      },
      {
        id: "10",
        name: "Sinh Tố Bơ",
        description: "Sinh tố bơ béo ngậy với sữa đặc và đá bào",
        price: 40000,
        image: "https://i.pinimg.com/736x/d5/62/72/d562720b865414b4c78eeac1921bd476.jpg",
        category: "Đồ uống",
        isFeatured: false,
      },
    ],
    priceRange: undefined
  },
  
  // Nhà hàng thứ ba
  {
    id: "3",
    name: "Nhà Hàng Hải Sản Tươi Ngon",
    location: "789 Nguyễn Thị Minh Khai, Quận Hải Châu, TP.Đà Nẵng",
    description: "Nhà hàng chuyên phục vụ các món hải sản tươi ngon, được chế biến theo phong cách Việt Nam.",
    rating: 4.7,
    openingHours: {
      open: "08:00",
      close: "21:00",
    },
    images: ["https://i.pinimg.com/736x/bc/e1/c7/bce1c70896e19cbc9456b20a1b20b0a1.jpg", "/placeholder.svg?height=400&width=600"],
    dishes: [
      {
        id: "11",
        name: "Cua Cà Mau",
        description: "Cua cà mau tươi ngon, thịt ngọt, được chế biến hấp hoặc xào me",
        price: 200000,
        image: "https://i.pinimg.com/736x/3d/c8/cb/3dc8cb55f1fce1f90c9eca00f6a9c7b6.jpg",
        category: "Hải sản",
        isFeatured: true,
      },
      {
        id: "12",
        name: "Mực Nướng",
        description: "Mực tươi nướng thơm lừng với gia vị đặc biệt",
        price: 120000,
        image: "https://i.pinimg.com/736x/dc/06/f4/dc06f4c286acbfb49ffaacab00b12868.jpg",
        category: "Hải sản",
        isFeatured: false,
      },
      {
        id: "13",
        name: "Gỏi Hải Sản",
        description: "Gỏi tươi với tôm, mực, bạch tuộc, rau thơm và nước mắm chua ngọt",
        price: 95000,
        image: "https://i.pinimg.com/736x/64/18/57/6418576259b5d43103f4d3744d03004e.jpg",
        category: "Khai vị",
        isFeatured: false,
      },
    ],
    priceRange: undefined
  },
  
  // Nhà hàng thứ tư
  {
    id: "4",
    name: "Nhà Hàng Lẩu Cua",
    location: "101 Đường Cống Quỳnh, Quận Cẩm Lệ, TP.Đà Nẵng",
    description: "Nhà hàng nổi bật với món lẩu cua đồng đặc biệt và các món ăn miền Tây Nam Bộ.",
    rating: 4.4,
    openingHours: {
      open: "09:00",
      close: "22:30",
    },
    images: ["https://i.pinimg.com/736x/19/81/6b/19816b54c6e42d4f5a1bf5bf3054f7de.jpg", "/placeholder.svg?height=400&width=600"],
    dishes: [
      {
        id: "14",
        name: "Lẩu Cua Đồng",
        description: "Lẩu cua đồng với rau đồng, bún tươi và các loại gia vị đặc trưng",
        price: 150000,
        image: "https://i.pinimg.com/736x/05/0a/3c/050a3ce4d3d8042184780d93886f0f7a.jpg",
        category: "Lẩu",
        isFeatured: true,
      },
      {
        id: "15",
        name: "Cá Kho Tộ",
        description: "Cá kho tộ với nước dừa, thơm ngọt, ăn kèm với cơm trắng",
        price: 85000,
        image: "https://i.pinimg.com/736x/14/c0/7f/14c07f5ac9fb7cae42cf6b17e96c60dc.jpg",
        category: "Món chính",
        isFeatured: false,
      },
    ],
    priceRange: undefined
  },
  
  // Nhà hàng thứ năm
  {
    id: "5",
    name: "Nhà Hàng Thịt Nướng Lâu Đời",
    location: "202 Đinh Tiên Hoàng, Quận Thanh Khê, TP.Đà Nẵng",
    description: "Nhà hàng chuyên phục vụ các món thịt nướng, đặc biệt là thịt bò và thịt cừu.",
    rating: 4.3,
    openingHours: {
      open: "10:00",
      close: "23:00",
    },
    images: ["https://i.pinimg.com/736x/4d/12/6d/4d126dbfdcf2e3de93e5fd97494f1549.jpg", "/placeholder.svg?height=400&width=600"],
    dishes: [
      {
        id: "16",
        name: "Bò Nướng Ngói",
        description: "Bò nướng ngói với gia vị đặc trưng, ăn kèm với rau sống và nước mắm chua ngọt",
        price: 120000,
        image: "https://i.pinimg.com/736x/c9/ca/37/c9ca37e4f7acf1dce25e34a0b2ecbc0b.jpg",
        category: "Món nướng",
        isFeatured: true,
      },
      {
        id: "17",
        name: "Cừu Nướng",
        description: "Cừu nướng thơm lừng, mềm mại, ăn kèm với salad tươi mát",
        price: 180000,
        image: "https://i.pinimg.com/736x/cc/81/68/cc816848309af97d4dfd9702e58ec6f5.jpg",
        category: "Món nướng",
        isFeatured: false,
      },
    ],
    priceRange: undefined
  },
]
