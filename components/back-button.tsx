"use client"

import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  return (
    <button
      onClick={() => window.history.back()}
      className="fixed top-4 left-4 z-50 bg-white/90 hover:bg-white text-gray-900 px-4 py-2 rounded-full shadow-lg flex items-center gap-2 transition-all duration-300 hover:shadow-xl"
    >
      <ArrowLeft className="h-5 w-5" />
      <span>Quay lại</span>
    </button>
  )
} 