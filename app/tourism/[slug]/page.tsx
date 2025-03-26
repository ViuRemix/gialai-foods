"use client"

import { use } from "react"
import Link from "next/link"
import BackButton from "@/components/back-button"
import TourismDetailClient from "./TourismDetailClient"

const tourismSpots = {
  "bien-ho-tnung": {
    name: "Biển Hồ T'Nưng",
    description: "Biển Hồ T'Nưng là một trong những điểm du lịch nổi tiếng nhất của Gia Lai. Hồ nước ngọt rộng lớn này được hình thành từ miệng núi lửa cổ, tạo nên cảnh quan tuyệt đẹp với mặt nước trong xanh và những đồi thông xanh mát bao quanh.",
    image: "/images/bien-ho-tnung.jpg",
    location: "Cách trung tâm TP. Pleiku 7km về phía Bắc",
    activities: ["Chèo thuyền", "Câu cá", "Cắm trại", "Ngắm cảnh"],
    bestTimeToVisit: "5h30 - 17h30 (Đẹp nhất vào lúc bình minh và hoàng hôn)",
    detailedDescription: `Biển Hồ T'Nưng (hay còn gọi là Hồ Tơ Nưng) là một hồ nước ngọt tự nhiên rộng lớn, được hình thành từ miệng núi lửa cổ cách đây hàng triệu năm...`,
    tips: [
      "Nên đến vào sáng sớm hoặc chiều tối để ngắm cảnh đẹp nhất",
      "Mang theo áo ấm vì nhiệt độ quanh hồ thường thấp hơn trung tâm thành phố",
      "Có thể thuê thuyền để tham quan trên hồ",
      "Nên đặt tour trước nếu muốn cắm trại qua đêm"
    ],
    facilities: [
      "Bãi đỗ xe rộng rãi",
      "Nhà vệ sinh công cộng",
      "Quán ăn và cafe view hồ",
      "Khu vực cắm trại",
      "Dịch vụ cho thuê thuyền"
    ],
    nearbySpots: [
      {
        name: "Đồi Thông Pleiku",
        distance: "3km",
        description: "Điểm ngắm cảnh lý tưởng với những hàng thông cao vút"
      },
      {
        name: "Chùa Minh Thành",
        distance: "5km",
        description: "Ngôi chùa lớn và đẹp nhất Tây Nguyên"
      }
    ]
  },
  "chua-minh-thanh": {
    name: "Chùa Minh Thành",
    description: "Chùa Minh Thành là một trong những ngôi chùa lớn và đẹp nhất Tây Nguyên, với kiến trúc độc đáo và không gian thanh tịnh.",
    image: "/images/chua-minh-thanh.jpg",
    location: "Số 132 Hùng Vương, TP. Pleiku",
    activities: ["Tham quan kiến trúc", "Lễ Phật", "Chụp ảnh", "Thiền"],
    bestTimeToVisit: "6h00 - 17h00 (Đẹp nhất vào buổi sáng sớm)",
    detailedDescription: `Chùa Minh Thành được xây dựng vào năm 1964, là một trong những ngôi chùa lớn và đẹp nhất của vùng Tây Nguyên. Chùa được thiết kế theo phong cách kiến trúc truyền thống Việt Nam, kết hợp với nét đặc trưng của vùng đất Tây Nguyên...`,
    tips: [
      "Mặc trang phục kín đáo, lịch sự khi vào chùa",
      "Không nên chụp ảnh trong khu vực thờ cúng",
      "Nên đến vào buổi sáng sớm để tránh nắng nóng",
      "Có thể tham gia các khóa tu ngắn hạn tại chùa"
    ],
    facilities: [
      "Bãi đỗ xe rộng rãi",
      "Nhà vệ sinh công cộng",
      "Khu vực nghỉ ngơi",
      "Quầy bán đồ lưu niệm"
    ],
    nearbySpots: [
      {
        name: "Quảng Trường Đại Đoàn Kết",
        distance: "1km",
        description: "Trung tâm văn hóa, chính trị của thành phố"
      },
      {
        name: "Hồ Diên Hồng",
        distance: "2km",
        description: "Điểm check-in nổi tiếng với cảnh quan đẹp"
      }
    ]
  },
  "quang-truong-dai-doan-ket": {
    name: "Quảng Trường Đại Đoàn Kết",
    description: "Quảng trường Đại Đoàn Kết là trung tâm văn hóa, chính trị của thành phố Pleiku, nơi diễn ra các sự kiện lớn và là điểm hẹn quen thuộc của người dân địa phương.",
    image: "/images/quang-truong.jpg",
    location: "Trung tâm TP. Pleiku",
    activities: ["Dạo chơi", "Tham gia sự kiện", "Chụp ảnh", "Thể dục buổi sáng"],
    bestTimeToVisit: "16h00 - 22h00 (Đẹp nhất vào buổi tối)",
    detailedDescription: `Quảng Trường Đại Đoàn Kết là trái tim của thành phố Pleiku, nơi diễn ra nhiều sự kiện văn hóa, chính trị quan trọng. Với diện tích rộng lớn, quảng trường được thiết kế hiện đại với nhiều tiểu cảnh đẹp mắt...`,
    tips: [
      "Nên đến vào buổi tối để tham gia các hoạt động vui chơi",
      "Có thể kết hợp tham quan với các địa điểm lân cận",
      "Mang theo máy ảnh để chụp ảnh kỷ niệm",
      "Chú ý giữ gìn vệ sinh chung"
    ],
    facilities: [
      "Bãi đỗ xe ngầm",
      "Nhà vệ sinh công cộng",
      "Khu vực nghỉ ngơi",
      "Quầy bán đồ ăn vặt"
    ],
    nearbySpots: [
      {
        name: "Chùa Minh Thành",
        distance: "1km",
        description: "Ngôi chùa lớn và đẹp nhất Tây Nguyên"
      },
      {
        name: "Hồ Diên Hồng",
        distance: "1.5km",
        description: "Điểm check-in nổi tiếng của thành phố"
      }
    ]
  },
  "doi-thong-pleiku": {
    name: "Đồi Thông Pleiku",
    description: "Đồi thông Pleiku là biểu tượng của thành phố sương mù, với những hàng thông cao vút tạo nên khung cảnh lãng mạn.",
    image: "/images/doi-thong.jpg",
    location: "Phường Thống Nhất, TP. Pleiku",
    activities: ["Picnic", "Chụp ảnh", "Dạo chơi", "Ngắm bình minh"],
    bestTimeToVisit: "5h00 - 18h00 (Đẹp nhất vào sáng sớm)",
    detailedDescription: `Đồi Thông Pleiku là một trong những biểu tượng nổi tiếng của thành phố Pleiku. Với diện tích rộng lớn, đồi thông được trồng thành những hàng thẳng tắp, tạo nên một khung cảnh thiên nhiên tuyệt đẹp...`,
    tips: [
      "Nên đến sớm vào buổi sáng để ngắm sương mù và bình minh",
      "Mang theo đồ ăn nhẹ và nước uống",
      "Chuẩn bị áo ấm vì buổi sáng có thể lạnh",
      "Có thể tổ chức picnic với gia đình hoặc nhóm bạn"
    ],
    facilities: [
      "Bãi đỗ xe",
      "Khu vực picnic",
      "Nhà vệ sinh công cộng",
      "Đường đi bộ"
    ],
    nearbySpots: [
      {
        name: "Biển Hồ T'Nưng",
        distance: "3km",
        description: "Hồ nước ngọt tự nhiên với cảnh quan tuyệt đẹp"
      },
      {
        name: "Chùa Minh Thành",
        distance: "4km",
        description: "Ngôi chùa lớn và đẹp nhất Tây Nguyên"
      }
    ]
  },
  "ho-dien-hong": {
    name: "Hồ Diên Hồng",
    description: "Hồ Diên Hồng là một trong những điểm check-in nổi tiếng của Pleiku, với hồ nước trong xanh và không gian xanh mát.",
    image: "/images/ho-dien-hong.jpg",
    location: "Trung tâm TP. Pleiku",
    activities: ["Đi bộ", "Chụp ảnh", "Thư giãn", "Câu cá"],
    bestTimeToVisit: "15h00 - 20h00 (Đẹp nhất vào hoàng hôn)",
    detailedDescription: `Hồ Diên Hồng là một hồ nước nhân tạo được xây dựng để tạo cảnh quan và điều hòa không khí cho thành phố Pleiku. Hồ có diện tích khoảng 7 ha, với nước trong xanh và nhiều loại cây cảnh được trồng xung quanh...`,
    tips: [
      "Nên đến vào buổi chiều để tránh nắng nóng",
      "Mang theo máy ảnh để chụp ảnh kỷ niệm",
      "Có thể đi bộ vòng quanh hồ để thư giãn",
      "Chú ý giữ gìn vệ sinh chung"
    ],
    facilities: [
      "Bãi đỗ xe",
      "Đường đi bộ",
      "Ghế ngồi nghỉ",
      "Nhà vệ sinh công cộng"
    ],
    nearbySpots: [
      {
        name: "Quảng Trường Đại Đoàn Kết",
        distance: "1.5km",
        description: "Trung tâm văn hóa, chính trị của thành phố"
      },
      {
        name: "Chùa Minh Thành",
        distance: "2km",
        description: "Ngôi chùa lớn và đẹp nhất Tây Nguyên"
      }
    ]
  },
  "cong-vien-dong-xanh": {
    name: "Công Viên Đồng Xanh",
    description: "Công viên Đồng Xanh là điểm đến lý tưởng cho các hoạt động thể thao và giải trí, với nhiều tiện ích hiện đại.",
    image: "/images/cong-vien-dong-xanh.jpg",
    location: "Phường Hội Thương, TP. Pleiku",
    activities: ["Thể dục", "Picnic", "Vui chơi", "Thư giãn"],
    bestTimeToVisit: "5h00 - 21h00",
    detailedDescription: `Công Viên Đồng Xanh là một trong những công viên lớn và hiện đại nhất của thành phố Pleiku. Với diện tích rộng lớn, công viên được thiết kế với nhiều khu vực chức năng khác nhau...`,
    tips: [
      "Nên đến sớm vào buổi sáng để tập thể dục",
      "Mang theo đồ ăn nhẹ và nước uống",
      "Có thể tổ chức picnic với gia đình",
      "Chú ý giữ gìn vệ sinh chung"
    ],
    facilities: [
      "Bãi đỗ xe",
      "Sân chơi trẻ em",
      "Khu tập thể dục",
      "Nhà vệ sinh công cộng",
      "Khu vực picnic"
    ],
    nearbySpots: [
      {
        name: "Hồ Diên Hồng",
        distance: "2km",
        description: "Điểm check-in nổi tiếng với cảnh quan đẹp"
      },
      {
        name: "Quảng Trường Đại Đoàn Kết",
        distance: "2.5km",
        description: "Trung tâm văn hóa, chính trị của thành phố"
      }
    ]
  },
  "cho-dem-pleiku": {
    name: "Chợ Đêm Pleiku",
    description: "Chợ đêm Pleiku là điểm đến không thể bỏ qua cho những ai muốn trải nghiệm ẩm thực đường phố và văn hóa địa phương.",
    image: "/images/cho-dem.jpg",
    location: "Đường Nguyễn Thiện Thuật, TP. Pleiku",
    activities: ["Ẩm thực", "Mua sắm", "Khám phá văn hóa"],
    bestTimeToVisit: "17h00 - 23h00",
    detailedDescription: `Chợ Đêm Pleiku là một trong những điểm đến ẩm thực nổi tiếng của thành phố. Với không gian rộng rãi, chợ có hàng trăm gian hàng phục vụ đa dạng các món ăn đặc sản của Gia Lai...`,
    tips: [
      "Nên đến vào buổi tối để thưởng thức ẩm thực",
      "Mang theo tiền mặt để mua sắm",
      "Có thể tham quan và chụp ảnh",
      "Chú ý vệ sinh an toàn thực phẩm"
    ],
    facilities: [
      "Bãi đỗ xe",
      "Khu vực ăn uống",
      "Khu vực mua sắm",
      "Nhà vệ sinh công cộng"
    ],
    nearbySpots: [
      {
        name: "Quảng Trường Đại Đoàn Kết",
        distance: "1km",
        description: "Trung tâm văn hóa, chính trị của thành phố"
      },
      {
        name: "Hồ Diên Hồng",
        distance: "1.5km",
        description: "Điểm check-in nổi tiếng của thành phố"
      }
    ]
  },
  "thac-phu-cuong": {
    name: "Thác Phú Cường",
    description: "Thác Phú Cường là một thác nước đẹp với độ cao khoảng 40m, tạo nên cảnh quan hùng vĩ và nên thơ.",
    image: "/images/thac-phu-cuong.jpg",
    location: "Xã Tú An, huyện An Khê, tỉnh Gia Lai",
    activities: ["Tắm thác", "Picnic", "Chụp ảnh", "Cắm trại"],
    bestTimeToVisit: "7h00 - 17h00",
    detailedDescription: `Thác Phú Cường là một trong những thác nước đẹp nhất của tỉnh Gia Lai. Với độ cao khoảng 40m, thác đổ xuống tạo thành nhiều tầng với những khối đá granite lớn...`,
    tips: [
      "Nên đi vào mùa khô để tránh nước chảy xiết",
      "Mang theo đồ bơi và khăn tắm",
      "Chuẩn bị đồ ăn nhẹ và nước uống",
      "Chú ý an toàn khi tắm thác"
    ],
    facilities: [
      "Bãi đỗ xe",
      "Khu vực picnic",
      "Nhà vệ sinh công cộng",
      "Đường đi bộ"
    ],
    nearbySpots: [
      {
        name: "Biển Hồ T'Nưng",
        distance: "15km",
        description: "Hồ nước ngọt tự nhiên với cảnh quan tuyệt đẹp"
      },
      {
        name: "Đồi Thông Pleiku",
        distance: "12km",
        description: "Biểu tượng của thành phố sương mù"
      }
    ]
  }
}

export default function TourismSpotPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const spot = tourismSpots[resolvedParams.slug as keyof typeof tourismSpots]

  if (!spot) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy địa điểm</h1>
        <Link href="/#tourism" className="text-primary hover:text-primary/80">
          Quay về danh sách địa điểm
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      <TourismDetailClient spot={spot} />
    </div>
  )
} 