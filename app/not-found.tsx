import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-4">Không Tìm Thấy Trang</h2>
      <p className="text-gray-600 mb-8">Trang bạn đang tìm kiếm không tồn tại.</p>
      <Link 
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
      >
        Trở Về Trang Chủ
      </Link>
    </div>
  )
} 