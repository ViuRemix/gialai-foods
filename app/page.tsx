"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronDown, MapPin, Utensils, Menu, X } from "lucide-react"
import { MapPinIcon, ClockIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { AnimatePresence } from "framer-motion"
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Move data outside component to ensure consistency
const PARTICLE_CONFIG = Array.from({ length: 50 }).map((_, i) => ({
  left: ((i % 10) * 10) + ((i * 7) % 20),
  top: (Math.floor(i / 10) * 20) + ((i * 13) % 20),
  scale: 0.5 + ((i % 5) * 0.1),
  duration: 2 + ((i % 3) * 1),
  delay: (i % 4) * 0.5,
}))

export default function GiaLaiCuisineBlog() {
  const [activeSection, setActiveSection] = useState("intro")
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showAllRestaurants, setShowAllRestaurants] = useState(false)
  const [showAllTourism, setShowAllTourism] = useState(false)
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8])
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      let current = ""

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 300) {
          current = section.getAttribute("id") || ""
        }
      })

      if (current && current !== activeSection) {
        setActiveSection(current)
        window.history.replaceState({}, '', `/${current === "intro" ? "" : current}`)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeSection])

  const handleMenuClick = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
    window.history.replaceState({}, '', `/${sectionId === "intro" ? "" : sectionId}`)
  }

  const restaurants = [
    {
      id: "pho-kho-quan-thanh",
      name: "Phở Khô Gia Lai - Quán Thanh",
      address: "123 Hùng Vương, TP. Pleiku",
      description: "Quán phở khô nổi tiếng với nước dùng đậm đà và thịt bò tươi ngon.",
      rating: 4.8,
      image: "/images/pho-kho.jpg",
      specialty: "Phở khô đặc biệt",
    },
    {
      id: "bun-cua-thoi-co-ba",
      name: "Bún Cua Thối Cô Ba",
      address: "45 Lê Lợi, TP. Pleiku",
      description: "Quán bún cua thối lâu đời nhất Pleiku, với công thức gia truyền hơn 30 năm.",
      rating: 4.5,
      image: "/images/bun-cua-thoi.jpeg",
      specialty: "Bún cua thối truyền thống",
    },
    {
      id: "nha-hang-tay-nguyen",
      name: "Nhà Hàng Tây Nguyên",
      address: "78 Phạm Văn Đồng, TP. Pleiku",
      description: "Nhà hàng chuyên các món đặc sản Tây Nguyên như cơm lam, gà nướng, lẩu lá rừng.",
      rating: 4.7,
      image: "/images/com-lam.jpg",
      specialty: "Cơm lam gà nướng",
    },
    {
      id: "lau-la-rung-dai-ngan",
      name: "Quán Lẩu Lá Rừng Đại Ngàn",
      address: "56 Nguyễn Tất Thành, TP. Pleiku",
      description: "Quán lẩu với hơn 20 loại lá rừng khác nhau, mang đến hương vị đặc trưng Tây Nguyên.",
      rating: 4.6,
      image: "/images/lau-la-rung.jpg",
      specialty: "Lẩu lá rừng thập cẩm",
    },
    {
      id: "bo-mot-nang-chi-hoa",
      name: "Quán Bò Một Nắng Chị Hoa",
      address: "34 Trần Phú, TP. Pleiku",
      description: "Chuyên các món từ bò một nắng, đặc biệt là bò một nắng chấm muối kiến vàng.",
      rating: 4.9,
      image: "/images/bo-mot-nang.jpg",
      specialty: "Bò một nắng muối kiến vàng",
    },
    {
      id: "ca-phe-doi-thong",
      name: "Cà Phê Đồi Thông",
      address: "89 Hai Bà Trưng, TP. Pleiku",
      description: "Quán cà phê view đẹp với không gian rộng rãi, phục vụ cà phê Gia Lai nguyên chất.",
      rating: 4.7,
      image: "/images/gia-lai-landscape.jpg",
      specialty: "Cà phê Gia Lai nguyên chất",
    },
    {
      id: "quan-com-ga-nguyen-nga",
      name: "Quán Cơm Gà Nguyên Nga",
      address: "91 Quang Trung, TP. Pleiku",
      description: "Quán cơm gà nổi tiếng với món cơm gà xé và gà nướng muối ớt.",
      rating: 4.6,
      image: "/images/com-ga.jpg",
      specialty: "Cơm gà xé",
    },
    {
      id: "quan-banh-canh-co-ut",
      name: "Quán Bánh Canh Cô Út",
      address: "156 Lê Duẩn, TP. Pleiku",
      description: "Bánh canh cá lóc và bánh canh giò heo thơm ngon, nước dùng đậm đà.",
      rating: 4.7,
      image: "/images/banh-canh.jpg",
      specialty: "Bánh canh cá lóc",
    },
    {
      id: "quan-mi-quang-ba-mua",
      name: "Quán Mì Quảng Bà Mua",
      address: "234 Phan Đình Phùng, TP. Pleiku",
      description: "Mì Quảng truyền thống với nước dùng đặc biệt và nhiều loại topping.",
      rating: 4.5,
      image: "/images/mi-quang.jpg",
      specialty: "Mì Quảng đặc biệt",
    },
    {
      id: "quan-che-thai-chi-huong",
      name: "Quán Chè Thái Chị Hương",
      address: "45 Nguyễn Huệ, TP. Pleiku",
      description: "Các loại chè Thái thơm ngon, nhiều topping và nước cốt dừa béo ngậy.",
      rating: 4.8,
      image: "/images/che-thai.jpg",
      specialty: "Chè Thái đặc biệt",
    }
  ]

  const tourismSpots = [
    {
      id: "bien-ho-tnung",
      name: "Biển Hồ T'Nưng",
      description: "Biển Hồ T'Nưng là một trong những điểm du lịch nổi tiếng nhất của Gia Lai. Hồ nước ngọt rộng lớn này được hình thành từ miệng núi lửa cổ, tạo nên cảnh quan tuyệt đẹp với mặt nước trong xanh và những đồi thông xanh mát bao quanh.",
      image: "/images/bien-ho-tnung.jpg",
      location: "Cách trung tâm TP. Pleiku 7km về phía Bắc",
      activities: ["Chèo thuyền", "Câu cá", "Cắm trại", "Ngắm cảnh"],
      bestTimeToVisit: "5h30 - 17h30 (Đẹp nhất vào lúc bình minh và hoàng hôn)"
    },
    {
      id: "chua-minha-thanh",
      name: "Chùa Minh Thành",
      description: "Chùa Minh Thành là một trong những ngôi chùa lớn và đẹp nhất Tây Nguyên. Chùa được xây dựng theo kiến trúc truyền thống, với nhiều công trình phụ trợ như tháp chuông, nhà tổ, và khuôn viên rộng lớn với nhiều cây cổ thụ.",
      image: "/images/chua-minh-thanh.jpg",
      location: "Số 132 Hùng Vương, TP. Pleiku",
      activities: ["Tham quan kiến trúc", "Lễ Phật", "Chụp ảnh"],
      bestTimeToVisit: "6h00 - 17h00"
    },
    {
      id: "quang-truong-dai-doan-ket",
      name: "Quảng Trường Đại Đoàn Kết",
      description: "Quảng trường Đại Đoàn Kết là trung tâm văn hóa, chính trị của thành phố Pleiku. Đây là nơi diễn ra các sự kiện lớn và là điểm hẹn quen thuộc của người dân địa phương.",
      image: "/images/quang-truong.jpg",
      location: "Trung tâm TP. Pleiku",
      activities: ["Dạo chơi", "Tham gia sự kiện", "Chụp ảnh"],
      bestTimeToVisit: "16h00 - 22h00"
    },
    {
      id: "doi-thong-pleiku",
      name: "Đồi Thông Pleiku",
      description: "Đồi thông Pleiku là biểu tượng của thành phố sương mù. Những hàng thông cao vút, thẳng tắp tạo nên khung cảnh lãng mạn, đặc biệt là vào những buổi sáng sớm khi sương mù còn giăng phủ.",
      image: "/images/doi-thong.jpg",
      location: "Phường Thống Nhất, TP. Pleiku",
      activities: ["Picnic", "Chụp ảnh", "Dạo chơi", "Ngắm bình minh"],
      bestTimeToVisit: "5h00 - 18h00 (Đẹp nhất vào sáng sớm)"
    },
    {
      id: "ho-dien-hong",
      name: "Hồ Diên Hồng",
      description: "Hồ Diên Hồng là một trong những điểm check-in nổi tiếng của Pleiku. Hồ nước trong xanh cùng với những con đường đi bộ được trang trí đẹp mắt tạo nên không gian lý tưởng cho các hoạt động giải trí.",
      image: "/images/ho-dien-hong.jpg",
      location: "Trung tâm TP. Pleiku",
      activities: ["Đi bộ", "Chụp ảnh", "Thư giãn", "Câu cá"],
      bestTimeToVisit: "15h00 - 20h00"
    },
    {
      id: "cong-vien-dong-xanh",
      name: "Công Viên Đồng Xanh",
      description: "Công viên Đồng Xanh là điểm đến lý tưởng cho các hoạt động thể thao và giải trí. Công viên có nhiều tiện ích như sân chơi trẻ em, khu tập thể dục, và không gian xanh rộng lớn.",
      image: "/images/cong-vien-dong-xanh.jpg",
      location: "Phường Hội Thương, TP. Pleiku",
      activities: ["Thể dục", "Picnic", "Vui chơi", "Thư giãn"],
      bestTimeToVisit: "5h00 - 21h00"
    },
    {
      id: "cho-dem-pleiku",
      name: "Chợ Đêm Pleiku",
      description: "Chợ đêm Pleiku là điểm đến không thể bỏ qua cho những ai muốn trải nghiệm ẩm thực đường phố và văn hóa địa phương. Tại đây có đầy đủ các món ăn đặc sản của Gia Lai.",
      image: "/images/cho-dem.jpg",
      location: "Đường Nguyễn Thiện Thuật, TP. Pleiku",
      activities: ["Ẩm thực", "Mua sắm", "Khám phá văn hóa"],
      bestTimeToVisit: "17h00 - 23h00"
    },
    {
      id: "thac-phu-cuong",
      name: "Thác Phú Cường",
      description: "Thác Phú Cường là một thác nước đẹp với độ cao khoảng 40m. Thác đổ xuống tạo thành nhiều tầng với những khối đá granite lớn, tạo nên cảnh quan hùng vĩ và nên thơ.",
      image: "/images/thac-phu-cuong.jpg",
      location: "Xã Tú An, huyện An Khê, tỉnh Gia Lai",
      activities: ["Tắm thác", "Picnic", "Chụp ảnh", "Cắm trại"],
      bestTimeToVisit: "7h00 - 17h00"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div
        ref={heroRef}
        className="relative h-[80vh] md:h-screen flex items-center justify-center overflow-hidden"
        style={{ opacity, scale, y }}
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/gia-lai-landscape.jpg"
            alt="Gia Lai landscape"
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
            className="transform scale-105 filter brightness-75"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              ease: "easeOut"
            }}
            className="mb-4 md:mb-6"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg tracking-tight">
              Khám Phá Ẩm Thực
              <span className="block text-primary-400 mt-1 md:mt-2">Gia Lai</span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-lg sm:text-xl md:text-2xl text-white/90 mb-6 md:mb-8 leading-relaxed drop-shadow-lg max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.2,
              ease: "easeOut"
            }}
          >
            Hành trình khám phá những hương vị đặc trưng của vùng đất Tây Nguyên
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 1,
              delay: 0.4,
              ease: "easeOut"
            }}
            className="space-y-4"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white px-6 py-4 md:px-8 md:py-6 text-base md:text-lg rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/20"
              onClick={() => {
                document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Khám Phá Ngay
            </Button>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-6 md:bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 cursor-pointer hover:text-white transition-colors duration-300"
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.6, 1, 0.6]
          }}
          transition={{ 
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut"
          }}
          onClick={() => document.getElementById("intro")?.scrollIntoView({ behavior: "smooth" })}
        >
          <ChevronDown size={32} className="md:hidden filter drop-shadow-lg" />
          <ChevronDown size={40} className="hidden md:block filter drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Navigation */}
      <nav className="sticky top-0 bg-white z-50 border-b shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14 md:h-16">
            <Link href="/" className="font-bold text-lg md:text-xl text-primary">
              Ẩm Thực Gia Lai
            </Link>
            <div className="hidden md:flex space-x-6 lg:space-x-8">
              {[
                { id: "intro", label: "Giới Thiệu" },
                { id: "dishes", label: "Đặc Sản" },
                { id: "restaurants", label: "Quán Ăn" },
                { id: "recipes", label: "Công Thức" },
                { id: "culture", label: "Văn Hóa" },
                { id: "tourism", label: "Du Lịch" },
              ].map((item) => (
                <a
                  key={item.id}
                  onClick={(e) => {
                    e.preventDefault()
                    handleMenuClick(item.id)
                  }}
                  className={`cursor-pointer transition-colors hover:text-primary text-sm lg:text-base ${
                    activeSection === item.id ? "text-primary font-medium" : "text-gray-600"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="py-2 space-y-0.5">
                {[
                  { id: "intro", label: "Giới Thiệu" },
                  { id: "dishes", label: "Đặc Sản" },
                  { id: "restaurants", label: "Quán Ăn" },
                  { id: "recipes", label: "Công Thức" },
                  { id: "culture", label: "Văn Hóa" },
                  { id: "tourism", label: "Du Lịch" },
                ].map((item) => (
                  <a
                    key={item.id}
                    onClick={(e) => {
                      e.preventDefault()
                      handleMenuClick(item.id)
                    }}
                    className={`block px-4 py-2.5 text-sm transition-colors hover:bg-gray-100 ${
                      activeSection === item.id ? "text-primary font-medium" : "text-gray-600"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 md:py-16">
        {/* Introduction Section */}
        <section id="intro" className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-gray-900">Giới Thiệu Về Ẩm Thực Gia Lai</h2>
              <div className="space-y-3 md:space-y-4 text-sm md:text-base text-gray-700">
                <p>
                  Ẩm thực Gia Lai mang đậm bản sắc văn hóa Tây Nguyên với những món ăn đặc trưng được chế biến từ nguyên
                  liệu địa phương. Nằm trên cao nguyên Pleiku, Gia Lai sở hữu khí hậu mát mẻ, đất đai màu mỡ, tạo nên
                  nền ẩm thực phong phú và đa dạng.
                </p>
                <p>
                  Đặc trưng của ẩm thực Gia Lai là sự kết hợp hài hòa giữa văn hóa ẩm thực của người Kinh và các dân tộc
                  thiểu số như Bahnar, Jarai. Các món ăn thường có vị cay nồng, đậm đà, sử dụng nhiều gia vị tự nhiên và
                  thảo mộc từ rừng núi.
                </p>
                <h3 className="text-lg md:text-xl font-semibold mt-4 md:mt-6 mb-2 md:mb-3">Sự khác biệt giữa ẩm thực Gia Lai và các vùng khác</h3>
                <p>
                  Khác với ẩm thực miền Bắc thiên về vị thanh, nhẹ nhàng hay miền Nam với vị ngọt đậm đà, ẩm thực Gia
                  Lai nổi bật với hương vị đậm đà, cay nồng và cách chế biến độc đáo. Người Gia Lai thường sử dụng các
                  nguyên liệu từ rừng núi như lá rừng, măng, nấm, thịt thú rừng (trước đây) và các loại gia vị đặc
                  trưng.
                </p>
                <p>
                  Một điểm đặc biệt khác là cách thưởng thức món ăn. Nhiều món ăn Gia Lai được phục vụ theo cách riêng
                  biệt, như phở khô được chia thành hai tô riêng biệt, hay cơm lam được nấu trong ống tre, tạo nên hương
                  vị đặc trưng không thể tìm thấy ở nơi khác.
                </p>
              </div>
            </div>
            <div className="relative h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
              <Image src="/images/gia-lai-landscape.jpg" alt="Ẩm thực Gia Lai" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 md:p-6">
                <p className="text-white text-base md:text-lg font-medium">Hương vị đặc trưng của vùng đất Tây Nguyên</p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Special Dishes Section */}
        <section id="dishes" className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-gray-900">Các Món Ăn Đặc Sản Gia Lai</h2>

            <div className="relative px-2 md:px-4">
              <Swiper
                allowTouchMove={false}
                slidesPerView={1}
                spaceBetween={16}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  }
                }}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                navigation={true}
                keyboard={{
                  enabled: true,
                }}
                modules={[Pagination, Navigation, Autoplay, Keyboard]}
                className="mySwiper max-w-7xl mx-auto !pb-12 md:!pb-14"
              >
                {/* Phở Khô */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('pho-kho')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full cursor-pointer hover:shadow-2xl transition-shadow">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/pho-kho.jpg"
                        alt="Phở khô Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Phở Khô Gia Lai (Phở Hai Tô)</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Phổ biến khắp thành phố Pleiku</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Phở khô Gia Lai là biến tấu độc đáo với cách thưởng thức riêng biệt: bánh phở và nước dùng được phục vụ trong hai tô riêng. Bánh phở được trộn với hành phi, mỡ hành, thịt bò tái và rau thơm.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản nổi tiếng</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món truyền thống</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>

                {/* Bún Cua Thối */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('bun-cua-thoi')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/bun-cua-thoi.jpeg"
                        alt="Bún cua thối Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Bún Cua Thối</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các chợ và quán ăn địa phương</span>
                  </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Món ăn độc đáo được chế biến từ cua đồng tươi ngon, được nghiền nhuyễn và ủ chua tự nhiên. Thường được ăn kèm với các loại rau sống và bánh tráng.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản địa phương</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Hương vị độc đáo</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>

                {/* Cơm Lam */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('com-lam')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/com-lam.jpg"
                        alt="Cơm lam Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Cơm Lam</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các làng dân tộc và nhà hàng đặc sản</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Món ăn truyền thống của đồng bào dân tộc, gạo nếp được nấu trong ống tre non, tạo nên hương vị đặc trưng của núi rừng Tây Nguyên.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Ẩm thực dân tộc</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món truyền thống</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>

                {/* Lẩu Lá Rừng */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('lau-la-rung')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/lau-la-rung.jpg"
                        alt="Lẩu lá rừng Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Lẩu Lá Rừng</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các nhà hàng đặc sản Tây Nguyên</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Món lẩu đặc trưng với nước dùng được nấu từ nhiều loại lá rừng khác nhau như lá giang, lá lốt, tạo nên hương vị độc đáo của vùng Tây Nguyên.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản Tây Nguyên</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món đặc trưng</span>
                    </div>
                  </div>
                </div>
                  </Link>
                </SwiperSlide>

                {/* Bò Một Nắng */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('bo-mot-nang')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/bo-mot-nang.jpg"
                        alt="Bò một nắng Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Bò Một Nắng</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các chợ và nhà hàng đặc sản</span>
                  </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Thịt bò được ướp gia vị đặc biệt và phơi nắng một ngày, tạo nên hương vị đặc trưng. Thường được ăn kèm với muối kiến vàng độc đáo.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản nổi tiếng</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món ngon Gia Lai</span>
                      </div>
                    </div>
                  </div>
                  </Link>
                </SwiperSlide>

                {/* Rượu Cần */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('ruou-can')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/ruou-can.jpg"
                        alt="Rượu Cần Gia Lai"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Rượu Cần</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các làng dân tộc và lễ hội truyền thống</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Đồ uống truyền thống của đồng bào dân tộc, được làm từ gạo hoặc sắn lên men, uống chung bằng ống hút tre trong các dịp lễ hội.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đồ uống truyền thống</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Văn hóa dân tộc</span>
                    </div>
                  </div>
                </div>
                  </Link>
                </SwiperSlide>

                {/* Bánh Tráng Phơi Sương */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('banh-trang-phoi-suong')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/banh-trang-phoi-suong.jpg"
                        alt="Bánh Tráng Phơi Sương"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Bánh Tráng Phơi Sương</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Đặc sản An Khê, Gia Lai</span>
                  </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Bánh tráng được phơi sương đêm tạo nên độ dẻo đặc trưng, thường được ăn kèm với thịt nướng hoặc cuốn với rau sống.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản địa phương</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Ẩm thực truyền thống</span>
                    </div>
                  </div>
                </div>
                  </Link>
                </SwiperSlide>

                {/* Gỏi Lá */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('goi-la')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/goi-la.jpg"
                        alt="Gỏi Lá Tây Nguyên"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Gỏi Lá Tây Nguyên</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Nhà hàng đặc sản Tây Nguyên</span>
                  </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Món gỏi độc đáo được chế biến từ các loại lá rừng tươi, kết hợp với thịt hoặc hải sản, tạo nên hương vị đặc trưng của vùng Tây Nguyên.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món đặc sản</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Hương vị núi rừng</span>
                    </div>
                  </div>
                </div>
                  </Link>
                </SwiperSlide>

                {/* Canh Chua Cá Suối */}
                <SwiperSlide>
                  <Link href={`/recipes/${encodeURIComponent('canh-chua-ca-suoi')}`}>
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden h-full">
                    <div className="relative h-[400px]">
                      <Image
                        src="/images/canh-chua-ca-suoi.jpg"
                        alt="Canh Chua Cá Suối"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white mb-2">Canh Chua Cá Suối</h3>
                        <div className="flex items-center text-white/90">
                          <MapPin className="h-5 w-5 mr-2" />
                          <span>Các quán ăn ven suối và nhà hàng</span>
                  </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4">
                        Món canh chua đặc trưng được nấu từ cá suối tươi với các loại rau rừng và gia vị địa phương, tạo nên hương vị chua thanh, ngọt tự nhiên.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Món truyền thống</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">Đặc sản vùng cao</span>
                    </div>
                  </div>
                </div>
                  </Link>
                </SwiperSlide>
              </Swiper>
            </div>

            <style jsx global>{`
              .swiper {
                padding: 0.5rem;
                margin-bottom: 1.5rem;
                position: relative;
                z-index: 1;
              }
              .swiper-slide {
                height: auto !important;
                transition: all 0.3s ease;
              }
              .swiper-slide > div {
                height: 100%;
                display: flex;
                flex-direction: column;
                background: white;
                border-radius: 0.75rem;
                overflow: hidden;
                box-shadow: 0 2px 4px -1px rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.06);
              }
              .swiper-pagination {
                position: absolute !important;
                bottom: 0 !important;
                margin-top: 0;
                padding-bottom: 0.75rem;
              }
              .swiper-pagination-bullet {
                background: #4F46E5;
                width: 6px;
                height: 6px;
                opacity: 0.5;
                transition: all 0.3s ease;
              }
              .swiper-pagination-bullet-active {
                opacity: 1;
                transform: scale(1.2);
                background: #4F46E5;
              }
              .swiper-button-next,
              .swiper-button-prev {
                color: #4F46E5;
                background: white;
                width: 30px;
                height: 30px;
                border-radius: 50%;
                box-shadow: 0 2px 4px rgba(0,0,0,0.1);
                transition: all 0.3s ease;
              }
              .swiper-button-next:after,
              .swiper-button-prev:after {
                font-size: 14px;
                font-weight: bold;
              }
              .swiper-button-next:hover,
              .swiper-button-prev:hover {
                background: #4F46E5;
                color: white;
                transform: scale(1.1);
              }
              @media (min-width: 640px) {
                .swiper {
                  padding: 1rem;
                  margin-bottom: 2rem;
                }
                .swiper-slide > div {
                  border-radius: 1rem;
                  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                }
                .swiper-pagination-bullet {
                  width: 8px;
                  height: 8px;
                }
                .swiper-button-next,
                .swiper-button-prev {
                  width: 35px;
                  height: 35px;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                  font-size: 16px;
                }
              }
            `}</style>
          </motion.div>
        </section>

        {/* Restaurants Section */}
        <section id="restaurants" className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-gray-900">Quán Ăn Ngon Ở Gia Lai</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {restaurants
                .slice(0, showAllRestaurants ? restaurants.length : 6)
                .map((restaurant, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Link href={`/restaurants/${restaurant.id}`}>
                    <Card className="overflow-hidden h-full hover:shadow-lg transition-shadow">
                      <div className="relative h-40 md:h-48">
                        <Image
                          src={restaurant.image}
                          alt={restaurant.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          style={{
                            objectFit: 'cover',
                          }}
                        />
                        <div className="absolute top-2 right-2 bg-primary text-white px-2 py-1 rounded-full text-sm font-medium">
                          {restaurant.rating} ★
                        </div>
                      </div>
                      <CardContent className="p-4 md:p-5">
                        <h3 className="text-lg md:text-xl font-bold mb-2 line-clamp-2">{restaurant.name}</h3>
                        <div className="flex items-center gap-1 text-gray-500 mb-2 md:mb-3">
                          <MapPin size={14} className="md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm line-clamp-1">{restaurant.address}</span>
                        </div>
                        <p className="text-xs md:text-sm text-gray-700 mb-3 md:mb-4 line-clamp-2">{restaurant.description}</p>
                        <div className="flex items-center gap-2 text-primary">
                          <Utensils size={14} className="md:w-4 md:h-4" />
                          <span className="text-xs md:text-sm font-medium line-clamp-1">Món đặc trưng: {restaurant.specialty}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 md:mt-10 text-center">
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => setShowAllRestaurants(!showAllRestaurants)}
                className="px-6 py-2 md:px-8 md:py-3 text-sm md:text-base"
              >
                {showAllRestaurants ? "Thu gọn" : "Xem Thêm Quán Ăn"}
              </Button>
            </div>
          </motion.div>
        </section>

        {/* Recipes Section */}
        <section id="recipes" className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-gray-900">Cách Làm Món Ăn Gia Lai Tại Nhà</h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Hướng Dẫn Nấu Phở Khô Gia Lai</h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-muted p-3 md:p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Nguyên liệu:</h4>
                    <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base">
                      <li>500g bánh phở tươi</li>
                      <li>300g thịt bò (thăn, gầu hoặc nạm)</li>
                      <li>Xương bò 1kg (để nấu nước dùng)</li>
                      <li>Hành tây, hành tím, gừng</li>
                      <li>Gia vị: hoa hồi, quế, thảo quả, đinh hương</li>
                      <li>Hành lá, ngò, giá đỗ, chanh, ớt</li>
                      <li>Nước mắm, đường, muối, tiêu</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Cách làm:</h4>
                    <ol className="list-decimal pl-4 md:pl-5 space-y-2 md:space-y-3 text-sm md:text-base">
                      <li>
                        <strong>Nấu nước dùng:</strong> Xương bò rửa sạch, chần qua nước sôi. Sau đó cho vào nồi nước
                        lạnh, thêm hành tây, gừng đã nướng thơm và các loại gia vị (hoa hồi, quế, thảo quả, đinh hương).
                        Nấu nhỏ lửa trong 3-4 giờ, sau đó lọc lấy nước trong.
                      </li>
                      <li>
                        <strong>Chuẩn bị thịt bò:</strong> Thịt bò thái mỏng, ướp với chút muối, tiêu, nước mắm trong 15
                        phút. Sau đó trụng qua nước dùng sôi để thịt chín tái.
                      </li>
                      <li>
                        <strong>Chuẩn bị bánh phở:</strong> Bánh phở tươi trụng qua nước sôi, để ráo.
                      </li>
                      <li>
                        <strong>Phi hành:</strong> Phi hành tím thái nhỏ với dầu ăn cho thơm.
                      </li>
                      <li>
                        <strong>Trình bày:</strong> Cho bánh phở vào tô, xếp thịt bò lên trên, rắc hành phi, hành lá
                        thái nhỏ. Nước dùng để riêng trong một tô khác. Khi ăn, có thể chan nước dùng vào hoặc nhúng
                        từng miếng phở vào nước dùng.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Bí quyết:</h4>
                    <p className="text-sm md:text-base">
                      Nước dùng phải được nấu kỹ từ xương bò để có vị ngọt tự nhiên. Hành phi phải vàng đều và thơm để
                      tạo hương vị đặc trưng cho món phở khô.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 md:space-y-6">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Cách Làm Bò Một Nắng Đúng Vị</h3>

                <div className="space-y-3 md:space-y-4">
                  <div className="bg-muted p-3 md:p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Nguyên liệu:</h4>
                    <ul className="list-disc pl-4 md:pl-5 space-y-1 text-sm md:text-base">
                      <li>1kg thịt bò (thăn, bắp hoặc gầu)</li>
                      <li>5 cây sả</li>
                      <li>3 củ gừng</li>
                      <li>5-7 quả ớt (tùy độ cay)</li>
                      <li>5 tép tỏi</li>
                      <li>Gia vị: muối, đường, tiêu, bột ngọt, nước mắm</li>
                      <li>Muối kiến vàng (nếu có) hoặc muối ớt để chấm</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Cách làm:</h4>
                    <ol className="list-decimal pl-4 md:pl-5 space-y-2 md:space-y-3 text-sm md:text-base">
                      <li>
                        <strong>Sơ chế thịt bò:</strong> Thịt bò rửa sạch, thái thành những miếng mỏng vừa ăn (khoảng
                        0.5cm).
                      </li>
                      <li>
                        <strong>Ướp thịt:</strong> Sả, gừng, tỏi, ớt băm nhỏ. Trộn đều với thịt bò, thêm muối, đường,
                        tiêu, bột ngọt, nước mắm. Ướp ít nhất 2 giờ, tốt nhất là qua đêm.
                      </li>
                      <li>
                        <strong>Phơi thịt:</strong> Xếp thịt đã ướp lên vỉ hoặc khay, phơi dưới nắng trong khoảng 6-8
                        giờ (một ngày nắng). Lưu ý che lưới để tránh ruồi, muỗi.
                      </li>
                      <li>
                        <strong>Chế biến:</strong> Sau khi phơi, thịt bò có thể được nướng trên than hồng hoặc chiên
                        giòn trong chảo.
                      </li>
                      <li>
                        <strong>Thưởng thức:</strong> Thịt bò một nắng thường được ăn kèm với muối kiến vàng hoặc muối
                        ớt, cùng với rau sống và bánh tráng.
                      </li>
                    </ol>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-sm md:text-base">Bí quyết:</h4>
                    <p className="text-sm md:text-base">
                      Thời gian phơi rất quan trọng: phơi quá lâu thịt sẽ khô, phơi không đủ thịt sẽ không có hương vị
                      đặc trưng. Nên phơi trong ngày nắng đẹp, tránh ngày có mưa hoặc độ ẩm cao.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 md:mt-12">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6">Bí Quyết Nướng Gà Ngon Như Người Bản Địa</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/gia-lai-landscape.jpg"
                    alt="Chuẩn bị gà nướng"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                    <p className="text-white text-sm md:text-base font-medium">Bước 1: Sơ chế và ướp gà</p>
                  </div>
                </div>

                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <Image 
                    src="/images/gia-lai-landscape.jpg" 
                    alt="Nướng gà" 
                    fill 
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                    <p className="text-white text-sm md:text-base font-medium">Bước 2: Nướng gà trên than hồng</p>
                  </div>
                </div>

                <div className="relative h-[200px] md:h-[300px] rounded-lg overflow-hidden">
                  <Image
                    src="/images/gia-lai-landscape.jpg"
                    alt="Gà nướng hoàn thành"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-3 md:p-4">
                    <p className="text-white text-sm md:text-base font-medium">Bước 3: Thành phẩm và thưởng thức</p>
                  </div>
                </div>
              </div>

              <div className="mt-4 md:mt-6 space-y-3 md:space-y-4 bg-muted p-4 md:p-6 rounded-lg">
                <h4 className="font-semibold text-sm md:text-base">Bí quyết nướng gà ngon:</h4>
                <ul className="list-disc pl-4 md:pl-5 space-y-1.5 md:space-y-2 text-sm md:text-base">
                  <li>Chọn gà thả vườn, gà ta để có thịt chắc và thơm ngon.</li>
                  <li>
                    Ướp gà với hỗn hợp sả, tỏi, ớt, riềng, nghệ tươi băm nhỏ và các gia vị như muối, tiêu, nước mắm, mật
                    ong.
                  </li>
                  <li>Thời gian ướp ít nhất 3 giờ, tốt nhất là qua đêm để gia vị thấm đều.</li>
                  <li>Nướng gà trên than hồng, không nướng trên lửa to để tránh gà cháy ngoài sống trong.</li>
                  <li>
                    Trong quá trình nướng, thường xuyên phết lên gà hỗn hợp gia vị còn lại để gà không bị khô và có màu
                    đẹp.
                  </li>
                  <li>Nướng gà đến khi vàng đều các mặt và chín kỹ bên trong.</li>
                  <li>Gà nướng thường được ăn kèm với cơm lam, rau sống và muối ớt chanh.</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-10 text-center text-gray-900">Câu Chuyện & Văn Hóa Ẩm Thực</h2>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center mb-8 md:mb-12">
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Người Gia Lai Ăn Uống Như Thế Nào?</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Văn hóa ẩm thực của người Gia Lai phản ánh lối sống gắn liền với thiên nhiên và cộng đồng. Bữa ăn của
                  người Gia Lai thường đơn giản nhưng đậm đà, sử dụng nguyên liệu địa phương và theo mùa.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Trong các gia đình người Kinh ở Gia Lai, bữa cơm thường có cơm, canh, và 2-3 món mặn. Các món ăn
                  thường được chế biến cay, đậm đà để phù hợp với khí hậu mát mẻ của vùng cao nguyên.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Đối với đồng bào dân tộc thiểu số như Bahnar, Jarai, bữa ăn truyền thống thường xoay quanh cơm lam,
                  thịt nướng và các loại rau rừng. Họ có thói quen ăn uống quây quần bên nhau, đặc biệt là trong các dịp
                  lễ hội hoặc sự kiện quan trọng của làng.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Một nét đặc trưng trong văn hóa ẩm thực của người Gia Lai là việc sử dụng các loại gia vị tự nhiên từ
                  rừng núi, tạo nên hương vị độc đáo cho các món ăn. Họ cũng có truyền thống uống rượu cần trong các dịp
                  lễ hội, đây không chỉ là đồ uống mà còn mang ý nghĩa tâm linh và cộng đồng sâu sắc.
                </p>
              </div>
              <div className="relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/gia-lai-landscape.jpg"
                  alt="Văn hóa ẩm thực Gia Lai"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
              <div className="order-2 md:order-1 relative h-[250px] md:h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/gia-lai-landscape.jpg"
                  alt="Lễ hội ẩm thực Gia Lai"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="order-1 md:order-2 space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-bold text-gray-900">Những Món Ăn Gắn Với Lễ Hội Của Người Địa Phương</h3>
                <p className="text-sm md:text-base text-gray-700">
                  Ẩm thực Gia Lai không chỉ đơn thuần là việc ăn uống mà còn gắn liền với các lễ hội và phong tục tập
                  quán của người dân địa phương, đặc biệt là các dân tộc thiểu số.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  <strong>Lễ hội Đâm Trâu:</strong> Đây là lễ hội truyền thống của người Bahnar và Jarai, thường được tổ
                  chức sau mùa gặt. Trong lễ hội này, thịt trâu được chế biến thành nhiều món khác nhau như thịt trâu
                  nướng, thịt trâu hấp lá dong, canh thịt trâu với các loại rau rừng.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  <strong>Lễ mừng lúa mới:</strong> Sau khi thu hoạch lúa, người dân tộc thiểu số thường tổ chức lễ mừng
                  lúa mới để tạ ơn thần linh. Trong lễ hội này, cơm lam, gà nướng và rượu cần là những món không thể
                  thiếu.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  <strong>Lễ cúng bến nước:</strong> Đây là nghi lễ quan trọng của người Bahnar, thường được tổ chức vào
                  mùa khô để cầu mưa. Trong lễ hội này, các món ăn từ cá như cá nướng, cá hấp lá chuối được chuẩn bị để
                  cúng và sau đó chia sẻ cho cả cộng đồng.
                </p>
                <p className="text-sm md:text-base text-gray-700">
                  Những món ăn trong các lễ hội không chỉ mang ý nghĩa về mặt dinh dưỡng mà còn chứa đựng những giá trị
                  văn hóa, tâm linh sâu sắc, thể hiện mối quan hệ gắn bó giữa con người với thiên nhiên và cộng đồng.
                </p>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Tourism Section */}
      <section id="tourism" className="py-8 md:py-12 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-6 md:mb-8 lg:mb-12 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Khám Phá Điểm Du Lịch
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {tourismSpots.slice(0, showAllTourism ? tourismSpots.length : 5).map((spot, index) => (
              <motion.div
                key={spot.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02,
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)"
                }}
                className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl"
              >
                <Link href={`/tourism/${encodeURIComponent(spot.id)}`}>
                  <div className="relative h-48 md:h-56 lg:h-64">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <motion.div 
                      className="absolute bottom-3 left-3 right-3"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                    >
                      <h3 className="text-lg md:text-xl font-bold text-white mb-1 line-clamp-2">{spot.name}</h3>
                      <div className="flex items-center text-white/90">
                        <MapPinIcon className="h-4 w-4 md:h-5 md:w-5 mr-1" />
                        <span className="text-xs md:text-sm line-clamp-1">{spot.location}</span>
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-3 md:p-4">
                    <motion.p 
                      className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2 min-h-[2.5rem] md:min-h-[3rem]"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      {spot.description}
                    </motion.p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-500">
                        <ClockIcon className="h-4 w-4 md:h-5 md:w-5 mr-1 text-green-600" />
                        <span className="text-xs md:text-sm line-clamp-1">{spot.bestTimeToVisit}</span>
                      </div>
                      <motion.div 
                        className="flex flex-wrap gap-1.5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {spot.activities.map((activity, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-0.5 bg-green-50 text-green-700 text-xs md:text-sm rounded-full border border-green-200 hover:bg-green-100 transition-colors duration-200"
                          >
                            {activity}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <motion.div 
            className="text-center mt-6 md:mt-8 lg:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <button
              onClick={() => setShowAllTourism(!showAllTourism)}
              className="group inline-flex items-center px-4 py-2 md:px-6 md:py-3 lg:px-8 lg:py-4 bg-gradient-to-r from-green-600 to-green-500 text-white text-sm md:text-base font-semibold rounded-lg hover:from-green-700 hover:to-green-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              {showAllTourism ? (
                <>
                  <MinusIcon className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Thu gọn
                </>
              ) : (
                <>
                  <PlusIcon className="h-4 w-4 md:h-5 md:w-5 mr-2 group-hover:rotate-180 transition-transform duration-300" />
                  Khám Phá Thêm Điểm Du Lịch
                </>
              )}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-gray-950 text-white py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:gap-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="space-y-4 col-span-2 md:col-span-1"
            >
              <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Ẩm Thực Gia Lai
              </h3>
              <p className="text-gray-400 text-sm md:text-base leading-relaxed">
                Khám phá hương vị đặc trưng của vùng đất Tây Nguyên qua những món ăn truyền thống và đặc sản nổi tiếng.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.09 1.064.077 1.791.232 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.233.636.388 1.363.465 2.427.077 1.067.09 1.407.09 4.123v.08c0 2.643-.012 2.987-.09 4.043-.077 1.064-.232 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.233-1.363.388-2.427.465-1.067.077-1.407.09-4.123.09h-.08c-2.643 0-2.987-.012-4.043-.09-1.064-.077-1.791-.232-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.233-.636-.388-1.363-.465-2.427-.077-1.024-.09-1.379-.09-3.808v-.63c0-2.43.013-2.784.09-3.808.077-1.064.232-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.233 1.363-.388 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.91-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Links & Contact Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="col-span-2 md:col-span-1 grid grid-cols-2 gap-8"
            >
              {/* Quick Links */}
              <div className="space-y-4">
                <h3 className="text-lg md:text-xl font-semibold">Liên Kết Nhanh</h3>
                <div className="space-y-2">
                  {[
                    { href: "#intro", label: "Giới Thiệu" },
                    { href: "#dishes", label: "Đặc Sản" },
                    { href: "#restaurants", label: "Quán Ăn" },
                    { href: "#recipes", label: "Công Thức" },
                    { href: "#culture", label: "Văn Hóa" },
                    { href: "#tourism", label: "Du Lịch" },
                  ].map((link, index) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      viewport={{ once: true }}
                    >
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-primary transition-colors flex items-center group text-sm md:text-base"
                      >
                        <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                        {link.label}
                      </a>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 -ml-7">
                <h3 className="text-lg md:text-xl font-semibold">Liên Hệ</h3>
                <div className="space-y-3">
                  <a
                    href="mailto:viu106018@donga.edu.vn"
                    className="flex items-center text-gray-400 hover:text-primary transition-colors group text-sm md:text-base truncate max-w-[250px]"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="transition-all duration-200 text-[13px] md:text-[15px] hover:underline">viu106018@donga.edu.vn</span>
                  </a>
                  <a
                    href="tel:0367604684"
                    className="flex items-center text-gray-400 hover:text-primary transition-colors group text-sm md:text-base"
                  >
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform text-[13px] md:text-[15px]">0367604684</span>
                  </a>
                  <div className="flex items-center text-gray-400 group text-sm md:text-base">
                    <svg className="w-4 h-4 md:w-5 md:h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="group-hover:translate-x-1 transition-transform text-[13px] md:text-[15px]">Pleiku, Gia Lai</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 mt-8 md:mt-12 pt-8 text-center"
          >
            <p className="text-gray-400 text-sm md:text-base">
              © {new Date().getFullYear()} Ẩm Thực Gia Lai. Tất cả quyền được bảo lưu.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}

