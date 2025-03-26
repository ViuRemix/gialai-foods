"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { MapPin, Clock, Calendar, Info, AlertCircle, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TourismSpot {
  name: string
  description: string
  image: string
  location: string
  activities: string[]
  bestTimeToVisit: string
  detailedDescription: string
  tips: string[]
  facilities: string[]
  nearbySpots: {
    name: string
    distance: string
    description: string
  }[]
}

export default function TourismDetailClient({ spot }: { spot: TourismSpot }) {
  const [showFullDescription, setShowFullDescription] = useState(false)
  const [showAllTips, setShowAllTips] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={spot.image}
          alt={spot.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white px-4"
          >
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{spot.name}</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">{spot.location}</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span className="text-sm md:text-base">{spot.bestTimeToVisit}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Section */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Giới thiệu</h2>
              <div className="relative">
                <p className={`text-gray-700 whitespace-pre-line ${!showFullDescription && 'line-clamp-4'}`}>
                  {spot.detailedDescription}
                </p>
                <button
                  onClick={() => setShowFullDescription(!showFullDescription)}
                  className="text-primary hover:text-primary/80 flex items-center gap-1 mt-2"
                >
                  {showFullDescription ? (
                    <>
                      Thu gọn <ChevronUp className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Xem thêm <ChevronDown className="h-4 w-4" />
                    </>
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Các hoạt động</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {spot.activities.map((activity, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg text-center hover:bg-primary/5 transition-colors"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <h2 className="text-2xl font-bold mb-4">Mẹo và lưu ý</h2>
              <div className="space-y-4">
                {spot.tips.slice(0, showAllTips ? undefined : 3).map((tip, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Info className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <p className="text-gray-700">{tip}</p>
                  </div>
                ))}
                {spot.tips.length > 3 && (
                  <button
                    onClick={() => setShowAllTips(!showAllTips)}
                    className="text-primary hover:text-primary/80 flex items-center gap-1"
                  >
                    {showAllTips ? (
                      <>
                        Thu gọn <ChevronUp className="h-4 w-4" />
                      </>
                    ) : (
                      <>
                        Xem thêm <ChevronDown className="h-4 w-4" />
                      </>
                    )}
                  </button>
                )}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Tiện ích</h2>
              <div className="space-y-3">
                {spot.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-primary flex-shrink-0" />
                    <span className="text-gray-700">{facility}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Địa điểm gần đó</h2>
              <div className="space-y-4">
                {spot.nearbySpots.map((nearbySpot, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 p-4 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    <h3 className="font-bold mb-1">{nearbySpot.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">Cách {nearbySpot.distance}</p>
                    <p className="text-gray-700 text-sm">{nearbySpot.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold mb-2">Lưu ý quan trọng</h3>
                  <p className="text-gray-700 text-sm">
                    Để có trải nghiệm tốt nhất, hãy lên kế hoạch tham quan phù hợp với thời gian và điều kiện thời tiết. 
                    Nếu cần thêm thông tin, bạn có thể liên hệ với chúng tôi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 