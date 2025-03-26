"use client"

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Timer, Users, Utensils } from 'lucide-react'
import { use } from 'react'
import BackButton from "@/components/back-button"

const recipes = {
  'pho-kho': {
    name: 'Phở Khô Gia Lai',
    image: '/images/pho-kho.jpg',
    description: 'Phở khô Gia Lai là biến tấu độc đáo với cách thưởng thức riêng biệt: bánh phở và nước dùng được phục vụ trong hai tô riêng.',
    prepTime: '30 phút',
    cookTime: '4 giờ',
    servings: '4-6 người',
    ingredients: [
      '500g bánh phở tươi',
      '300g thịt bò (thăn, gầu hoặc nạm)',
      'Xương bò 1kg (để nấu nước dùng)',
      'Hành tây, hành tím, gừng',
      'Gia vị: hoa hồi, quế, thảo quả, đinh hương', 
      'Hành lá, ngò, giá đỗ, chanh, ớt',
      'Nước mắm, đường, muối, tiêu'
    ],
    instructions: [
      {
        title: 'Nấu nước dùng',
        steps: [
          'Xương bò rửa sạch, chần qua nước sôi',
          'Cho vào nồi nước lạnh, thêm hành tây và gừng đã nướng thơm',
          'Thêm các gia vị (hoa hồi, quế, thảo quả, đinh hương)',
          'Nấu nhỏ lửa trong 3-4 giờ',
          'Lọc lấy nước trong'
        ]
      },
      {
        title: 'Chuẩn bị thịt bò',
        steps: [
          'Thịt bò thái mỏng',
          'Ướp với muối, tiêu, nước mắm trong 15 phút',
          'Trụng qua nước dùng sôi để thịt chín tái'
        ]
      },
      {
        title: 'Chuẩn bị bánh phở',
        steps: [
          'Bánh phở tươi trụng qua nước sôi',
          'Để ráo nước'
        ]
      },
      {
        title: 'Phi hành',
        steps: [
          'Hành tím thái nhỏ',
          'Phi vàng với dầu ăn cho thơm'
        ]
      },
      {
        title: 'Trình bày và thưởng thức',
        steps: [
          'Cho bánh phở vào tô',
          'Xếp thịt bò lên trên',
          'Rắc hành phi và hành lá thái nhỏ',
          'Để nước dùng riêng trong một tô khác',
          'Khi ăn, có thể chan nước dùng vào hoặc nhúng từng miếng phở vào nước dùng'
        ]
      }
    ],
    tips: [
      'Nước dùng phải được nấu kỹ từ xương bò để có vị ngọt tự nhiên',
      'Hành phi phải vàng đều và thơm để tạo hương vị đặc trưng',
      'Có thể thêm các loại rau ăn kèm tùy thích như: giá đỗ, rau quế, rau húng',
      'Nên ăn ngay khi vừa trình bày để thưởng thức được hương vị tốt nhất'
    ]
  },
  'bun-cua-thoi': {
    name: 'Bún Cua Thối',
    image: '/images/bun-cua-thoi.jpeg',
    description: 'Món ăn độc đáo được chế biến từ cua đồng tươi ngon, được nghiền nhuyễn và ủ chua tự nhiên.',
    prepTime: '45 phút',
    cookTime: '30 phút',
    servings: '4-6 người',
    ingredients: [
      '500g cua đồng tươi',
      '300g bún tươi',
      'Rau sống các loại (rau muống chẻ, bắp chuối bào, giá đỗ)',
      'Gia vị: mắm tôm, mắm ruốc, ớt, tỏi, chanh',
      'Bánh tráng',
      'Đậu phộng rang',
      'Hành phi'
    ],
    instructions: [
      {
        title: 'Chuẩn bị cua',
        steps: [
          'Cua đồng rửa sạch',
          'Nghiền nhuyễn cua (giữ lại gạch cua)',
          'Ủ hỗn hợp cua trong 4-6 tiếng để lên men tự nhiên'
        ]
      },
      {
        title: 'Chuẩn bị nước chấm',
        steps: [
          'Pha mắm tôm với nước cốt chanh',
          'Thêm ớt, tỏi băm nhuyễn',
          'Điều chỉnh vị chua cay theo khẩu vị'
        ]
      },
      {
        title: 'Hoàn thành',
        steps: [
          'Trụng bún trong nước sôi',
          'Xếp rau sống ra đĩa',
          'Cho bún ra tô',
          'Thêm cua đã ủ lên trên',
          'Rắc đậu phộng và hành phi',
          'Ăn kèm với bánh tráng và nước chấm'
        ]
      }
    ],
    tips: [
      'Chọn cua đồng tươi sống để có vị ngon nhất',
      'Thời gian ủ cua rất quan trọng, không nên ủ quá lâu',
      'Có thể điều chỉnh độ cay của nước chấm theo khẩu vị',
      'Nên ăn kèm với nhiều loại rau sống để cân bằng vị'
    ]
  },
  'com-lam': {
    name: 'Cơm Lam',
    image: '/images/com-lam.jpg',
    description: 'Món ăn truyền thống của đồng bào dân tộc, gạo nếp được nấu trong ống tre non, tạo nên hương vị đặc trưng của núi rừng Tây Nguyên.',
    prepTime: '30 phút',
    cookTime: '1 giờ',
    servings: '4-6 người',
    ingredients: [
      '500g gạo nếp',
      'Ống tre non (dài khoảng 30-40cm)',
      'Lá chuối',
      'Muối',
      'Nước sạch'
    ],
    instructions: [
      {
        title: 'Chuẩn bị nguyên liệu',
        steps: [
          'Ngâm gạo nếp trong nước 2-3 tiếng',
          'Chuẩn bị ống tre non, cắt thành từng đoạn',
          'Rửa sạch ống tre',
          'Lá chuối rửa sạch, lau khô'
        ]
      },
      {
        title: 'Nấu cơm lam',
        steps: [
          'Cho gạo nếp đã ngâm vào ống tre',
          'Đổ nước vào ngập mặt gạo khoảng 1 đốt ngón tay',
          'Thêm một chút muối',
          'Bịt đầu ống tre bằng lá chuối',
          'Nướng ống tre trên bếp than hoặc bếp củi',
          'Thỉnh thoảng xoay ống tre để cơm chín đều'
        ]
      },
      {
        title: 'Thưởng thức',
        steps: [
          'Khi cơm chín, tách ống tre ra',
          'Thưởng thức cơm lam với các món ăn kèm như gà nướng, thịt nướng'
        ]
      }
    ],
    tips: [
      'Chọn ống tre non để cơm có hương vị thơm ngon hơn',
      'Không nên cho quá nhiều nước để cơm không bị nhão',
      'Nướng cơm với lửa vừa phải để cơm chín đều',
      'Có thể thêm đậu đen hoặc lạc vào gạo để tăng hương vị'
    ]
  },
  'lau-la-rung': {
    name: 'Lẩu Lá Rừng',
    image: '/images/lau-la-rung.jpg',
    description: 'Món lẩu đặc trưng với nước dùng được nấu từ nhiều loại lá rừng khác nhau như lá giang, lá lốt, tạo nên hương vị độc đáo của vùng Tây Nguyên.',
    prepTime: '45 phút',
    cookTime: '30 phút',
    servings: '4-6 người',
    ingredients: [
      '500g thịt bò',
      '500g thịt gà',
      'Các loại lá rừng: lá giang, lá lốt, lá mơ, lá đinh lăng',
      'Nấm các loại',
      'Rau rừng: rau ngót rừng, rau má, rau đắng',
      'Gia vị: sả, gừng, tỏi, ớt',
      'Nước dùng xương hầm',
      'Bánh tráng, bún tươi'
    ],
    instructions: [
      {
        title: 'Chuẩn bị nguyên liệu',
        steps: [
          'Thịt bò, thịt gà thái mỏng',
          'Rửa sạch các loại lá rừng',
          'Sơ chế nấm và rau rừng',
          'Chuẩn bị gia vị: sả, gừng, tỏi băm nhuyễn'
        ]
      },
      {
        title: 'Nấu nước dùng',
        steps: [
          'Phi thơm sả, gừng, tỏi',
          'Thêm nước dùng xương hầm',
          'Nêm nếm gia vị vừa ăn',
          'Thêm các loại lá rừng vào nấu'
        ]
      },
      {
        title: 'Thưởng thức',
        steps: [
          'Đặt nồi lẩu lên bếp',
          'Xếp thịt, nấm, rau rừng ra đĩa',
          'Nhúng thịt và rau vào nước dùng nóng',
          'Ăn kèm với bún và bánh tráng'
        ]
      }
    ],
    tips: [
      'Chọn các loại lá rừng tươi để có hương vị tốt nhất',
      'Có thể điều chỉnh độ cay của nước dùng theo khẩu vị',
      'Nên ăn khi nước dùng còn nóng để thưởng thức được hương vị đặc trưng',
      'Có thể thêm các loại rau rừng khác tùy theo mùa'
    ]
  },
  'bo-mot-nang': {
    name: 'Bò Một Nắng',
    image: '/images/bo-mot-nang.jpg',
    description: 'Thịt bò được ướp gia vị đặc biệt và phơi nắng một ngày, tạo nên hương vị đặc trưng. Thường được ăn kèm với muối kiến vàng độc đáo.',
    prepTime: '30 phút',
    cookTime: '8 giờ',
    servings: '4-6 người',
    ingredients: [
      '1kg thịt bò (thăn, bắp hoặc gầu)',
      '5 cây sả',
      '3 củ gừng',
      '5-7 quả ớt',
      '5 tép tỏi',
      'Gia vị: muối, đường, tiêu, bột ngọt, nước mắm',
      'Muối kiến vàng hoặc muối ớt để chấm',
      'Rau sống các loại',
      'Bánh tráng'
    ],
    instructions: [
      {
        title: 'Sơ chế thịt bò',
        steps: [
          'Thịt bò rửa sạch, thái thành miếng mỏng vừa ăn',
          'Sả, gừng, tỏi, ớt băm nhuyễn',
          'Trộn đều gia vị với thịt bò',
          'Ướp ít nhất 2 giờ, tốt nhất là qua đêm'
        ]
      },
      {
        title: 'Phơi thịt',
        steps: [
          'Xếp thịt đã ướp lên vỉ hoặc khay',
          'Phơi dưới nắng trong khoảng 6-8 giờ',
          'Che lưới để tránh ruồi, muỗi',
          'Đảo đều thịt để phơi đều các mặt'
        ]
      },
      {
        title: 'Chế biến và thưởng thức',
        steps: [
          'Nướng thịt trên than hồng hoặc chiên giòn',
          'Thưởng thức với muối kiến vàng hoặc muối ớt',
          'Ăn kèm với rau sống và bánh tráng'
        ]
      }
    ],
    tips: [
      'Chọn thịt bò tươi ngon, có độ dày vừa phải',
      'Thời gian phơi rất quan trọng, phơi quá lâu thịt sẽ khô',
      'Nên phơi trong ngày nắng đẹp, tránh ngày có mưa',
      'Có thể bảo quản thịt trong tủ lạnh sau khi phơi'
    ]
  },
  'ruou-can': {
    name: 'Rượu Cần',
    image: '/images/ruou-can.jpg',
    description: 'Đồ uống truyền thống của đồng bào dân tộc, được làm từ gạo hoặc sắn lên men, uống chung bằng ống hút tre trong các dịp lễ hội.',
    prepTime: '2 ngày',
    cookTime: '7 ngày',
    servings: 'Nhiều người',
    ingredients: [
      '5kg gạo nếp hoặc sắn',
      'Men rượu truyền thống',
      'Nước sạch',
      'Ống tre non',
      'Lá chuối',
      'Củi khô'
    ],
    instructions: [
      {
        title: 'Chuẩn bị nguyên liệu',
        steps: [
          'Ngâm gạo nếp hoặc sắn trong nước',
          'Xay nhuyễn thành bột',
          'Hấp chín bột',
          'Để nguội bột'
        ]
      },
      {
        title: 'Lên men',
        steps: [
          'Trộn men rượu với bột đã nguội',
          'Cho vào ống tre đã rửa sạch',
          'Bịt kín miệng ống bằng lá chuối',
          'Ủ trong 7 ngày'
        ]
      },
      {
        title: 'Thưởng thức',
        steps: [
          'Mở ống rượu',
          'Thêm nước sạch vào',
          'Uống bằng ống hút tre',
          'Thưởng thức trong các dịp lễ hội'
        ]
      }
    ],
    tips: [
      'Chọn men rượu truyền thống để có hương vị đặc trưng',
      'Nhiệt độ ủ rượu phải phù hợp',
      'Thời gian ủ rượu có thể điều chỉnh theo khẩu vị',
      'Nên uống có chừng mực và đúng cách'
    ]
  },
  'banh-trang-phoi-suong': {
    name: 'Bánh Tráng Phơi Sương',
    image: '/images/banh-trang-phoi-suong.jpg',
    description: 'Bánh tráng được phơi sương đêm tạo nên độ dẻo đặc trưng, thường được ăn kèm với thịt nướng hoặc cuốn với rau sống.',
    prepTime: '1 ngày',
    cookTime: '1 đêm',
    servings: 'Nhiều người',
    ingredients: [
      'Bột gạo',
      'Nước sạch',
      'Muối',
      'Bột sắn',
      'Dụng cụ tráng bánh',
      'Vỉ phơi'
    ],
    instructions: [
      {
        title: 'Chuẩn bị bột',
        steps: [
          'Pha bột gạo với nước',
          'Thêm bột sắn và muối',
          'Khuấy đều để bột tan',
          'Để bột nghỉ 2-3 giờ'
        ]
      },
      {
        title: 'Tráng bánh',
        steps: [
          'Đun nóng khuôn tráng',
          'Đổ bột vào khuôn',
          'Tráng đều thành bánh mỏng',
          'Đặt bánh lên vỉ phơi'
        ]
      },
      {
        title: 'Phơi sương',
        steps: [
          'Phơi bánh dưới nắng nhẹ',
          'Để bánh phơi sương đêm',
          'Thu bánh vào sáng sớm',
          'Bảo quản trong túi kín'
        ]
      }
    ],
    tips: [
      'Chọn bột gạo ngon để bánh có độ dẻo tốt',
      'Thời gian phơi sương rất quan trọng',
      'Bảo quản bánh trong môi trường khô ráo',
      'Có thể ăn kèm với nhiều món khác nhau'
    ]
  },
  'goi-la': {
    name: 'Gỏi Lá Tây Nguyên',
    image: '/images/goi-la.jpg',
    description: 'Món gỏi độc đáo được chế biến từ các loại lá rừng tươi, kết hợp với thịt hoặc hải sản, tạo nên hương vị đặc trưng của vùng Tây Nguyên.',
    prepTime: '30 phút',
    cookTime: '20 phút',
    servings: '4-6 người',
    ingredients: [
      'Các loại lá rừng: lá mơ, lá đinh lăng, lá lốt',
      '300g thịt bò hoặc tôm',
      'Rau rừng: rau ngót rừng, rau má',
      'Gia vị: sả, tỏi, ớt, chanh',
      'Nước mắm, đường, muối',
      'Đậu phộng rang',
      'Bánh tráng'
    ],
    instructions: [
      {
        title: 'Chuẩn bị nguyên liệu',
        steps: [
          'Rửa sạch các loại lá rừng',
          'Thịt bò thái mỏng hoặc tôm bóc vỏ',
          'Sơ chế rau rừng',
          'Chuẩn bị gia vị'
        ]
      },
      {
        title: 'Chế biến',
        steps: [
          'Xào thịt bò hoặc tôm với gia vị',
          'Trộn các loại lá rừng với thịt',
          'Làm nước mắm chua ngọt',
          'Rắc đậu phộng rang lên trên'
        ]
      },
      {
        title: 'Thưởng thức',
        steps: [
          'Xếp gỏi ra đĩa',
          'Ăn kèm với bánh tráng',
          'Chấm với nước mắm chua ngọt'
        ]
      }
    ],
    tips: [
      'Chọn các loại lá rừng tươi ngon',
      'Có thể điều chỉnh độ cay theo khẩu vị',
      'Nên ăn ngay sau khi chế biến',
      'Có thể thêm các loại rau rừng khác tùy theo mùa'
    ]
  },
  'canh-chua-ca-suoi': {
    name: 'Canh Chua Cá Suối',
    image: '/images/canh-chua-ca-suoi.jpg',
    description: 'Món canh chua đặc trưng được nấu từ cá suối tươi với các loại rau rừng và gia vị địa phương, tạo nên hương vị chua thanh, ngọt tự nhiên.',
    prepTime: '30 phút',
    cookTime: '30 phút',
    servings: '4-6 người',
    ingredients: [
      '500g cá suối',
      'Các loại rau rừng: rau ngót rừng, rau má',
      'Cà chua, dọc mùng',
      'Gia vị: sả, tỏi, ớt, me',
      'Nước mắm, đường, muối',
      'Hành tím phi',
      'Rau răm, ngò gai'
    ],
    instructions: [
      {
        title: 'Sơ chế nguyên liệu',
        steps: [
          'Làm sạch cá suối',
          'Rửa sạch các loại rau rừng',
          'Sơ chế cà chua và dọc mùng',
          'Chuẩn bị gia vị'
        ]
      },
      {
        title: 'Nấu canh',
        steps: [
          'Phi thơm sả, tỏi',
          'Thêm nước và me',
          'Cho cá vào nấu',
          'Thêm rau rừng và gia vị'
        ]
      },
      {
        title: 'Hoàn thành',
        steps: [
          'Nêm nếm vừa ăn',
          'Thêm hành tím phi',
          'Rắc rau răm, ngò gai',
          'Thưởng thức nóng'
        ]
      }
    ],
    tips: [
      'Chọn cá suối tươi ngon',
      'Có thể điều chỉnh độ chua theo khẩu vị',
      'Nên ăn ngay sau khi nấu',
      'Có thể thêm các loại rau rừng khác tùy theo mùa'
    ]
  }
}

export default function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = use(params)
  const recipe = recipes[resolvedParams.slug as keyof typeof recipes]

  if (!recipe) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Không tìm thấy công thức</h1>
        <Link href="/" className="text-primary hover:text-primary/80">
          Quay về trang chủ
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <BackButton />
      {/* Header */}
      <div className="relative h-[60vh]">
        <Image
          src={recipe.image}
          alt={recipe.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 left-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-white bg-black/30 px-4 py-2 rounded-full hover:bg-black/50 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Quay lại</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="container mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              {recipe.name}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              {recipe.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-white rounded-2xl shadow-xl p-8 -mt-20 relative">
          {/* Recipe Info */}
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="flex items-center gap-3">
              <Timer className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Thời gian chuẩn bị</p>
                <p className="font-medium">{recipe.prepTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Utensils className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Thời gian nấu</p>
                <p className="font-medium">{recipe.cookTime}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              <div>
                <p className="text-sm text-gray-500">Khẩu phần</p>
                <p className="font-medium">{recipe.servings}</p>
              </div>
            </div>
          </div>

          {/* Ingredients */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Nguyên liệu</h2>
            <ul className="grid md:grid-cols-2 gap-4">
              {recipe.ingredients.map((ingredient, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {ingredient}
                </li>
              ))}
            </ul>
          </div>

          {/* Instructions */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Cách làm</h2>
            <div className="space-y-8">
              {recipe.instructions.map((section, index) => (
                <div key={index}>
                  <h3 className="text-xl font-semibold mb-4">{section.title}</h3>
                  <ol className="space-y-4">
                    {section.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex gap-4">
                        <span className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-medium">
                          {stepIndex + 1}
                        </span>
                        <p className="text-gray-700 pt-1">{step}</p>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>

          {/* Tips */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Mẹo và lưu ý</h2>
            <ul className="space-y-4">
              {recipe.tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary/10 text-primary rounded-full flex items-center justify-center font-medium text-sm">
                    ✓
                  </span>
                  <p className="text-gray-700">{tip}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 