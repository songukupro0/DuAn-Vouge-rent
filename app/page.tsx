// app/page.tsx

import { StarIcon, UserIcon } from "@heroicons/react/20/solid";
import {
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  KeyIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const products = [
  {
    id: 1,
    name: "Mercedes-Benz S-Class",
    href: "#",
    price: "5.500.000đ/ngày",
    description: "Sang trọng và công nghệ đỉnh cao, phù hợp cho doanh nhân và sự kiện quan trọng.",
    imageSrc:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Mercedes-Benz S-Class in black.",
  },
  {
    id: 2,
    name: "BMW 7 Series",
    href: "#",
    price: "5.000.000đ/ngày",
    description: "Sự kết hợp hoàn hảo giữa hiệu suất lái và không gian nội thất tiện nghi.",
    imageSrc:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "A white BMW 7 series car.",
  },
  {
    id: 3,
    name: "Audi A8",
    href: "#",
    price: "4.800.000đ/ngày",
    description: "Thiết kế tinh tế, hiện đại cùng trải nghiệm lái xe êm ái, yên tĩnh.",
    imageSrc:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Front view of a silver Audi A8.",
  },
   {
    id: 4,
    name: "Lexus LS 500h",
    href: "#",
    price: "6.000.000đ/ngày",
    description: "Đỉnh cao của sự sang trọng và tin cậy từ Nhật Bản, với nội thất thủ công.",
    imageSrc:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "A dark Lexus LS 500h sedan.",
  },
];

const features = [
  {
    name: "Giá Tốt Nhất",
    description: "Chúng tôi cam kết mang đến mức giá thuê xe cạnh tranh nhất thị trường.",
    icon: CurrencyDollarIcon,
  },
  {
    name: "An Toàn & Bảo Hiểm",
    description: "Tất cả các xe đều được bảo hiểm đầy đủ và kiểm tra an toàn định kỳ.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Hỗ Trợ 24/7",
    description: "Đội ngũ hỗ trợ chuyên nghiệp luôn sẵn sàng giúp đỡ bạn mọi lúc, mọi nơi.",
    icon: ClockIcon,
  },
];

const howItWorks = [
  {
    name: "Chọn Xe & Đặt Lịch",
    description: "Duyệt qua danh sách xe, chọn chiếc xe bạn yêu thích và thời gian thuê mong muốn.",
    icon: KeyIcon,
  },
  {
    name: "Xác Nhận & Thanh Toán",
    description: "Hoàn tất thông tin và thực hiện thanh toán an toàn qua nền tảng của chúng tôi.",
    icon: ShieldCheckIcon,
  },
  {
    name: "Nhận Xe & Trải Nghiệm",
    description: "Nhận xe tại địa điểm đã hẹn và bắt đầu hành trình đẳng cấp của bạn.",
    icon: UserGroupIcon,
  },
];

const testimonials = [
  {
    body: "Dịch vụ tuyệt vời! Xe rất mới và sạch sẽ, thủ tục nhanh gọn. Chắc chắn sẽ quay lại.",
    author: {
      name: "Anh Minh Tuấn",
      handle: "doanh nhân",
      imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e",
    },
  },
  {
    body: "Tôi đã thuê xe cho đám cưới và rất hài lòng. Chiếc xe sang trọng đã làm ngày trọng đại của tôi thêm phần đặc biệt.",
    author: {
      name: "Chị Lan Anh",
      handle: "cô dâu",
      imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    },
  },
  {
    body: "Nhân viên hỗ trợ rất nhiệt tình. Tôi gặp sự cố nhỏ và đã được giải quyết nhanh chóng. 5 sao!",
    author: {
      name: "Anh Quốc Bảo",
      handle: "khách du lịch",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    },
  },
];

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      {/* Banner Section */}
      <div className="relative h-96 w-full sm:h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden bg-black">
        <video
  className="absolute z-[-1] top-0 left-0 w-full h-full object-cover"
  autoPlay
  loop
  muted
  playsInline
>
  <source
    src="https://www.mercedes-benz.com.vn/content/dam/vietnam/passengercars/homepage-stage/8251246_2023_MB_ROS_EClass_Exclusive_Cinema_Hero_30Sec_Clean_1920x1080px%20original.mp4"
    type="video/mp4"
  />
</video>
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white p-4 z-10">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Trải Nghiệm Đẳng Cấp
            </h1>
            <p className="mt-4 text-lg md:text-2xl max-w-2xl">
              VougeRent - Nơi khởi đầu những hành trình sang trọng và đầy cảm hứng.
            </p>
            <a
              href="/services"
              className="mt-8 inline-block rounded-full bg-indigo-500 px-8 py-3 text-lg font-semibold text-white transition hover:bg-indigo-600"
            >
              Khám Phá Dịch Vụ
            </a>
          </div>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center">
            Các Dòng Xe Nổi Bật
          </h2>
          <p className="text-center mt-4 text-lg text-gray-600 dark:text-gray-400">
            Khám phá bộ sưu tập xe sang trọng, sẵn sàng cho mọi hành trình của bạn.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">{product.name}</h3>
                <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{product.description}</p>
                <p className="mt-2 text-lg font-semibold text-indigo-600 dark:text-indigo-400">{product.price}</p>
                 <a href={product.href} className="mt-4 inline-block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500">
                    Thuê Ngay
                  </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
        <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:text-center">
                <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Quy Trình Đơn Giản</h2>
                <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                    Chỉ 3 Bước Để Bắt Đầu Hành Trình
                </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    {howItWorks.map((step) => (
                    <div key={step.name} className="flex flex-col items-center text-center">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 text-white">
                            <step.icon className="h-6 w-6" aria-hidden="true" />
                        </div>
                        <h3 className="mt-4 font-semibold text-gray-900 dark:text-white">{step.name}</h3>
                        <p className="mt-2 leading-7 text-gray-600 dark:text-gray-400">{step.description}</p>
                    </div>
                    ))}
                </div>
                </div>
            </div>
        </div>


      {/* Why Choose Us Section */}
      <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Dịch Vụ Vượt Trội</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Tại Sao Nên Chọn VougeRent?
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {feature.name}
                  </h3>
                  <p className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600 dark:text-indigo-400">
              Khách Hàng Nói Về Chúng Tôi
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Niềm tin và sự hài lòng của bạn là thành công của VougeRent.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <figure key={testimonial.author.handle} className="rounded-2xl bg-white dark:bg-gray-900 p-8 text-sm leading-6">
                <blockquote className="text-gray-900 dark:text-gray-300">
                  <p>{`“${testimonial.body}”`}</p>
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-x-4">
                  <img className="h-10 w-10 rounded-full bg-gray-50 object-cover" src={testimonial.author.imageUrl} alt="" width={40} height={40}/>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                    <div className="text-gray-600 dark:text-gray-400">{`@${testimonial.author.handle}`}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
