"use client"

import { use } from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Clock, Phone, Star, AlertCircle } from "lucide-react"
import BackButton from "@/components/back-button"
import RestaurantDetailClient from "./RestaurantDetailClient"
import { Button } from "@/components/ui/button"

const restaurants = {
  "pho-kho-quan-thanh": {
    id: "pho-kho-quan-thanh",
    name: "Phở Khô Gia Lai - Quán Thanh",
    description: "Quán phở khô nổi tiếng với nước dùng đậm đà và thịt bò tươi ngon.",
    mainImage: "/images/pho-kho.jpg",
    rating: 4.8,
    phone: "0367123456",
    openHours: "6:00 - 21:00",
    specialty: "Phở khô đặc biệt",
    priceRange: "30.000đ - 50.000đ",
    location: {
      city: "TP. Pleiku",
      address: "123 Hùng Vương, TP. Pleiku",
      distance: "2.5 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.5 km" },
        { name: "Chợ Phố Núi", distance: "0.8 km" },
        { name: "Biển Hồ T'Nưng", distance: "3 km" }
      ]
    },
    images: ["/images/pho-kho.jpg", "/images/pho-kho-2.jpg", "/images/pho-kho-3.jpg"],
    menu: [
      {
        name: "Phở khô đặc biệt",
        price: "45.000đ",
        description: "Phở khô với thịt bò tái, nạm, gầu",
        image: "/images/pho-kho.jpg"
      },
      {
        name: "Phở khô gầu",
        price: "40.000đ",
        description: "Phở khô với thịt bò gầu",
        image: "/images/pho-kho-2.jpg"
      }
    ],
    features: ["Wifi miễn phí", "Điều hòa", "Chỗ đậu xe", "Thanh toán thẻ"]
  },
  "bun-cua-thoi-co-ba": {
    id: "bun-cua-thoi-co-ba",
    name: "Bún Cua Thối Cô Ba",
    description: "Quán bún cua thối lâu đời nhất Pleiku, với công thức gia truyền hơn 30 năm.",
    mainImage: "/images/bun-cua-thoi.jpeg",
    rating: 4.5,
    phone: "0367234567",
    openHours: "6:00 - 14:00",
    specialty: "Bún cua thối truyền thống",
    priceRange: "25.000đ - 40.000đ",
    location: {
      city: "TP. Pleiku",
      address: "45 Lê Lợi, TP. Pleiku",
      distance: "1.8 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.5 km" },
        { name: "Chợ Phố Núi", distance: "0.8 km" },
        { name: "Biển Hồ T'Nưng", distance: "3 km" }
      ]
    },
    images: ["/images/bun-cua-thoi.jpeg", "/images/bun-cua-thoi-2.jpg", "/images/bun-cua-thoi-3.jpg"],
    menu: [
      {
        name: "Bún cua thối đặc biệt",
        price: "35.000đ",
        description: "Bún cua thối với đầy đủ topping",
        image: "/images/bun-cua-thoi.jpeg"
      }
    ],
    features: ["Chỗ ngồi ngoài trời", "Đặc sản địa phương", "Phục vụ nhanh"]
  },
  "nha-hang-tay-nguyen": {
    id: "nha-hang-tay-nguyen",
    name: "Nhà Hàng Tây Nguyên",
    description: "Nhà hàng chuyên các món đặc sản Tây Nguyên như cơm lam, gà nướng, lẩu lá rừng.",
    mainImage: "/images/com-lam.jpg",
    rating: 4.7,
    phone: "0367345678",
    openHours: "10:00 - 22:00",
    specialty: "Cơm lam gà nướng",
    priceRange: "100.000đ - 300.000đ",
    location: {
      city: "TP. Pleiku",
      address: "78 Phạm Văn Đồng, TP. Pleiku",
      distance: "3.2 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "1.5 km" },
        { name: "Chợ Phố Núi", distance: "1.8 km" },
        { name: "Biển Hồ T'Nưng", distance: "4 km" }
      ]
    },
    images: ["/images/com-lam.jpg", "/images/com-lam-2.jpg", "/images/com-lam-3.jpg"],
    menu: [
      {
        name: "Cơm lam gà nướng",
        price: "150.000đ",
        description: "Cơm lam với gà nướng muối ớt",
        image: "/images/com-lam.jpg"
      }
    ],
    features: ["Phòng VIP", "Điều hòa", "Đặt tiệc", "Chỗ đậu xe"]
  },
  "lau-la-rung-dai-ngan": {
    id: "lau-la-rung-dai-ngan",
    name: "Quán Lẩu Lá Rừng Đại Ngàn",
    description: "Quán lẩu với hơn 20 loại lá rừng khác nhau, mang đến hương vị đặc trưng Tây Nguyên.",
    mainImage: "/images/lau-la-rung.jpg",
    rating: 4.6,
    phone: "0367456789",
    openHours: "15:00 - 23:00",
    specialty: "Lẩu lá rừng thập cẩm",
    priceRange: "200.000đ - 500.000đ",
    location: {
      city: "TP. Pleiku",
      address: "56 Nguyễn Tất Thành, TP. Pleiku",
      distance: "2.8 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "1.2 km" },
        { name: "Chợ Phố Núi", distance: "1.5 km" },
        { name: "Biển Hồ T'Nưng", distance: "3.5 km" }
      ]
    },
    images: ["/images/lau-la-rung.jpg", "/images/lau-la-rung-2.jpg", "/images/lau-la-rung-3.jpg"],
    menu: [
      {
        name: "Lẩu lá rừng thập cẩm",
        price: "350.000đ",
        description: "Lẩu với 20 loại lá rừng và các loại thịt",
        image: "/images/lau-la-rung.jpg"
      }
    ],
    features: ["Điều hòa", "Chỗ đậu xe", "Phòng riêng", "View đẹp"]
  },
  "bo-mot-nang-chi-hoa": {
    id: "bo-mot-nang-chi-hoa",
    name: "Quán Bò Một Nắng Chị Hoa",
    description: "Chuyên các món từ bò một nắng, đặc biệt là bò một nắng chấm muối kiến vàng.",
    mainImage: "/images/bo-mot-nang.jpg",
    rating: 4.9,
    phone: "0367567890",
    openHours: "10:00 - 21:00",
    specialty: "Bò một nắng muối kiến vàng",
    priceRange: "150.000đ - 300.000đ",
    location: {
      city: "TP. Pleiku",
      address: "34 Trần Phú, TP. Pleiku",
      distance: "2.1 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.8 km" },
        { name: "Chợ Phố Núi", distance: "1.2 km" },
        { name: "Biển Hồ T'Nưng", distance: "3.2 km" }
      ]
    },
    images: ["/images/bo-mot-nang.jpg", "/images/bo-mot-nang-2.jpg", "/images/bo-mot-nang-3.jpg"],
    menu: [
      {
        name: "Bò một nắng muối kiến vàng",
        price: "200.000đ",
        description: "Bò một nắng chấm muối kiến vàng đặc biệt",
        image: "/images/bo-mot-nang.jpg"
      }
    ],
    features: ["Điều hòa", "Đặt bàn", "Giao hàng", "Thanh toán thẻ"]
  },
  "quan-com-ga-nguyen-nga": {
    id: "quan-com-ga-nguyen-nga",
    name: "Quán Cơm Gà Nguyên Nga",
    description: "Quán cơm gà nổi tiếng với món cơm gà xé và gà nướng muối ớt.",
    mainImage: "/images/com-ga.jpg",
    rating: 4.6,
    phone: "0367678901",
    openHours: "6:00 - 21:00",
    specialty: "Cơm gà xé",
    priceRange: "35.000đ - 60.000đ",
    location: {
      city: "TP. Pleiku",
      address: "91 Quang Trung, TP. Pleiku",
      distance: "1.5 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.3 km" },
        { name: "Chợ Phố Núi", distance: "0.6 km" },
        { name: "Biển Hồ T'Nưng", distance: "2.8 km" }
      ]
    },
    images: ["/images/com-ga.jpg", "/images/com-ga-2.jpg", "/images/com-ga-3.jpg"],
    menu: [
      {
        name: "Cơm gà xé",
        price: "45.000đ",
        description: "Cơm với gà xé và nước mắm tỏi ớt",
        image: "/images/com-ga.jpg"
      }
    ],
    features: ["Wifi miễn phí", "Điều hòa", "Giao hàng"]
  },
  "quan-banh-canh-co-ut": {
    id: "quan-banh-canh-co-ut",
    name: "Quán Bánh Canh Cô Út",
    description: "Bánh canh cá lóc và bánh canh giò heo thơm ngon, nước dùng đậm đà.",
    mainImage: "/images/banh-canh.jpg",
    rating: 4.7,
    phone: "0367789012",
    openHours: "6:00 - 19:00",
    specialty: "Bánh canh cá lóc",
    priceRange: "30.000đ - 50.000đ",
    location: {
      city: "TP. Pleiku",
      address: "156 Lê Duẩn, TP. Pleiku",
      distance: "2.3 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.9 km" },
        { name: "Chợ Phố Núi", distance: "1.1 km" },
        { name: "Biển Hồ T'Nưng", distance: "3.3 km" }
      ]
    },
    images: ["/images/banh-canh.jpg", "/images/banh-canh-2.jpg", "/images/banh-canh-3.jpg"],
    menu: [
      {
        name: "Bánh canh cá lóc",
        price: "40.000đ",
        description: "Bánh canh với cá lóc tươi",
        image: "/images/banh-canh.jpg"
      }
    ],
    features: ["Wifi miễn phí", "Chỗ ngồi ngoài trời"]
  },
  "quan-mi-quang-ba-mua": {
    id: "quan-mi-quang-ba-mua",
    name: "Quán Mì Quảng Bà Mua",
    description: "Mì Quảng truyền thống với nước dùng đặc biệt và nhiều loại topping.",
    mainImage: "/images/mi-quang.jpg",
    rating: 4.5,
    phone: "0367890123",
    openHours: "6:00 - 20:00",
    specialty: "Mì Quảng đặc biệt",
    priceRange: "35.000đ - 55.000đ",
    location: {
      city: "TP. Pleiku",
      address: "234 Phan Đình Phùng, TP. Pleiku",
      distance: "2.7 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "1.1 km" },
        { name: "Chợ Phố Núi", distance: "1.4 km" },
        { name: "Biển Hồ T'Nưng", distance: "3.6 km" }
      ]
    },
    images: ["/images/mi-quang.jpg", "/images/mi-quang-2.jpg", "/images/mi-quang-3.jpg"],
    menu: [
      {
        name: "Mì Quảng đặc biệt",
        price: "45.000đ",
        description: "Mì Quảng với đầy đủ topping",
        image: "/images/mi-quang.jpg"
      }
    ],
    features: ["Wifi miễn phí", "Điều hòa", "Giao hàng"]
  },
  "quan-che-thai-chi-huong": {
    id: "quan-che-thai-chi-huong",
    name: "Quán Chè Thái Chị Hương",
    description: "Các loại chè Thái thơm ngon, nhiều topping và nước cốt dừa béo ngậy.",
    mainImage: "/images/che-thai.jpg",
    rating: 4.8,
    phone: "0367901234",
    openHours: "9:00 - 22:00",
    specialty: "Chè Thái đặc biệt",
    priceRange: "20.000đ - 35.000đ",
    location: {
      city: "TP. Pleiku",
      address: "45 Nguyễn Huệ, TP. Pleiku",
      distance: "1.9 km",
      nearbyPlaces: [
        { name: "Quảng trường Đại Đoàn Kết", distance: "0.6 km" },
        { name: "Chợ Phố Núi", distance: "0.9 km" },
        { name: "Biển Hồ T'Nưng", distance: "3.1 km" }
      ]
    },
    images: ["/images/che-thai.jpg", "/images/che-thai-2.jpg", "/images/che-thai-3.jpg"],
    menu: [
      {
        name: "Chè Thái đặc biệt",
        price: "30.000đ",
        description: "Chè Thái với đầy đủ topping",
        image: "/images/che-thai.jpg"
      }
    ],
    features: ["Wifi miễn phí", "Điều hòa", "Giao hàng"]
  }
}

export default function RestaurantPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const restaurant = restaurants[resolvedParams.slug as keyof typeof restaurants]

  if (!restaurant) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy nhà hàng</h1>
        <Link href="/" className="text-primary hover:text-primary/80">
          Quay về trang chủ
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <RestaurantDetailClient restaurant={restaurant} />
    </div>
  )
} 