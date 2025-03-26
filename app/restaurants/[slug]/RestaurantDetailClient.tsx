"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowLeft, Clock, MapPin, Phone, Star, Utensils, Navigation, Building2, Circle } from "lucide-react"

import { Button } from "@/components/ui/button"

interface Restaurant {
  id: string
  name: string
  description: string
  mainImage: string
  rating: number
  phone: string
  openHours: string
  specialty: string
  priceRange: string
  location: {
    city: string
    address: string
    distance: string
    nearbyPlaces: {
      name: string
      distance: string
    }[]
  }
  images: string[]
  menu: {
    name: string
    price: string
    description: string
    image: string
  }[]
  features: string[]
}

export default function RestaurantDetailClient({ restaurant }: { restaurant: Restaurant }) {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <div className="min-h-screen bg-white">
      {/* Back button */}
      <div className="fixed top-4 left-4 z-50">
        <Link href="/#restaurants">
          <Button variant="outline" className="gap-2">
            <ArrowLeft size={16} />
            Quay lại
          </Button>
        </Link>
      </div>

      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        <Image
          src={restaurant.mainImage}
          alt={restaurant.name}
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
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{restaurant.name}</h1>
            <div className="flex items-center justify-center gap-2 text-xl">
              <Star className="fill-yellow-400 text-yellow-400" />
              <span>{restaurant.rating}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Left Column - Info */}
          <div className="md:col-span-2 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-6 space-y-4"
            >
              <h2 className="text-2xl font-bold">Thông tin nhà hàng</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-600">
                  <MapPin size={20} />
                  <span>{restaurant.location.address}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone size={20} />
                  <span>{restaurant.phone}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Clock size={20} />
                  <span>{restaurant.openHours}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Utensils size={20} />
                  <span>Giá: {restaurant.priceRange}</span>
                </div>
              </div>
              <p className="text-gray-700 mt-4">{restaurant.description}</p>
            </motion.div>

            {/* Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold">Hình ảnh</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {restaurant.images.map((image, index) => (
                  <div
                    key={index}
                    className={`relative h-48 rounded-lg overflow-hidden cursor-pointer transition-transform hover:scale-105 ${
                      activeImage === index ? "ring-2 ring-primary" : ""
                    }`}
                    onClick={() => setActiveImage(index)}
                  >
                    <Image src={image} alt={`${restaurant.name} ${index + 1}`} fill className="object-cover" />
                  </div>
                ))}
              </div>
              <div className="relative h-96 rounded-lg overflow-hidden mt-4">
                <Image
                  src={restaurant.images[activeImage]}
                  alt={`${restaurant.name} large`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4"
            >
              <h2 className="text-2xl font-bold">Thực đơn</h2>
              <div className="grid gap-4">
                {restaurant.menu.map((item, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">{item.name}</h3>
                        <p className="text-gray-600 text-sm">{item.description}</p>
                      </div>
                      <span className="text-primary font-medium">{item.price}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Features */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-bold mb-4">Tiện ích</h2>
              <ul className="space-y-3">
                {restaurant.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-600">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Section */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={restaurant.mainImage}
                  alt={`${restaurant.name} location`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Vị Trí</h3>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">{restaurant.location.address}</p>
                    <p className="text-gray-500">{restaurant.location.city}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <p className="text-gray-700">Cách trung tâm {restaurant.location.distance}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <p className="font-medium text-gray-900">Điểm đến lân cận:</p>
                  <ul className="space-y-2">
                    {restaurant.location.nearbyPlaces.map((place, index) => (
                      <li key={index} className="flex items-center gap-2 text-gray-700">
                        <Circle className="w-2 h-2 text-primary" />
                        {place.name} ({place.distance})
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full" onClick={() => window.location.href = `tel:${restaurant.phone}`}>
                  <Phone className="w-4 h-4 mr-2" />
                  Liên hệ ngay
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  )
} 