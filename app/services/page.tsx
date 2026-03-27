// app/services/page.tsx
import { CheckIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

const tiers = [
  {
    name: 'Gói Tiêu Chuẩn',
    id: 'tier-standard',
    href: '#',
    price: { monthly: '2.000.000đ', annually: '20.000.000đ' },
    description: 'Lựa chọn hoàn hảo cho các chuyến đi trong thành phố và công tác ngắn ngày.',
    features: ['Xe sedan phổ thông (Toyota, Honda)', 'Bảo hiểm cơ bản', 'Hỗ trợ 24/7', 'Giới hạn 200km/ngày'],
    featured: false,
    mostPopular: false,
  },
  {
    name: 'Gói Thương Gia',
    id: 'tier-business',
    href: '#',
    price: { monthly: '5.000.000đ', annually: '50.000.000đ' },
    description: 'Dành cho doanh nhân và các dịp đặc biệt, yêu cầu sự sang trọng và tiện nghi.',
    features: [
      'Xe sang (Mercedes, BMW, Audi)',
      'Bảo hiểm toàn diện',
      'Tài xế riêng (tùy chọn)',
      'Không giới hạn km',
      'Nước suối & khăn lạnh',
    ],
    featured: true,
    mostPopular: true,
  },
  {
    name: 'Gói VIP',
    id: 'tier-vip',
    href: '#',
    price: { monthly: '10.000.000đ', annually: '100.000.000đ' },
    description: 'Trải nghiệm đẳng cấp thượng lưu với những dòng xe và dịch vụ tốt nhất.',
    features: [
      'Siêu xe hoặc xe siêu sang (Rolls-Royce, Maybach)',
      'Bảo hiểm VIP',
      'Tài xế chuyên nghiệp',
      'Dịch vụ concierge 24/7',
      'Tùy chọn trang trí xe',
      'Ưu tiên đặt xe',
    ],
    featured: false,
    mostPopular: false,
  },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function ServicesPage() {
  return (
    <div className="isolate overflow-hidden bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 pb-96 pt-24 text-center sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-base font-semibold leading-7 text-indigo-400">Dịch Vụ</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Các Gói Dịch Vụ Phù Hợp <br className="hidden sm:inline lg:hidden" />
            Với Mọi Nhu Cầu
          </p>
        </div>
        <div className="relative mt-6">
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/60">
            Từ những chuyến đi công tác nhanh gọn đến những sự kiện trọng đại, VougeRent luôn có giải pháp hoàn hảo cho bạn.
          </p>
           <svg
            viewBox="0 0 1208 1024"
            className="absolute -top-10 left-1/2 -z-10 h-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:-top-12 md:-top-20 lg:-top-12 xl:top-0"
          >
            <ellipse
              cx={604}
              cy={512}
              fill="url(#6d1bd035-0dd1-437e-93fa-59d316231eb0)"
              rx={604}
              ry={512}
            />
            <defs>
              <radialGradient id="6d1bd035-0dd1-437e-93fa-59d316231eb0">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
      <div className="flow-root bg-white pb-24 sm:pb-32">
        <div className="-mt-80">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto grid max-w-md grid-cols-1 gap-8 lg:max-w-4xl lg:grid-cols-2">
              {tiers.map((tier) => (
                <div
                  key={tier.id}
                  className={classNames(
                    tier.featured ? 'bg-gray-900 ring-gray-900' : 'ring-gray-200',
                    'rounded-3xl p-8 ring-1 xl:p-10'
                  )}
                >
                  <h3
                    id={tier.id}
                    className={classNames(
                      tier.featured ? 'text-white' : 'text-gray-900',
                      'text-lg font-semibold leading-8'
                    )}
                  >
                    {tier.name}
                  </h3>
                  <p className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-4 text-sm leading-6')}>
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span
                      className={classNames(
                        tier.featured ? 'text-white' : 'text-gray-900',
                        'text-4xl font-bold tracking-tight'
                      )}
                    >
                      {tier.price.monthly}
                    </span>
                    <span className={classNames(tier.featured ? 'text-gray-300' : 'text-gray-600', 'text-sm font-semibold leading-6')}>
                      /ngày
                    </span>
                  </p>
                  <a
                    href={tier.href}
                    aria-describedby={tier.id}
                    className={classNames(
                      tier.featured
                        ? 'bg-white/10 text-white hover:bg-white/20 focus-visible:outline-white'
                        : 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600',
                      'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2'
                    )}
                  >
                    Chọn Gói
                  </a>
                  <ul
                    role="list"
                    className={classNames(
                      tier.featured ? 'text-gray-300' : 'text-gray-600',
                      'mt-8 space-y-3 text-sm leading-6 xl:mt-10'
                    )}
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon
                          className={classNames(tier.featured ? 'text-white' : 'text-indigo-600', 'h-6 w-5 flex-none')}
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="flex flex-col items-start gap-x-8 gap-y-6 rounded-3xl p-8 ring-1 ring-gray-900/10 sm:gap-y-10 sm:p-10 lg:col-span-2 lg:flex-row lg:items-center">
                 <div className="lg:min-w-0 lg:flex-1">
                  <h3 className="text-lg font-semibold leading-8 tracking-tight text-indigo-600">Yêu Cầu Đặc Biệt</h3>
                  <p className="mt-1 text-base leading-7 text-gray-600">
                    Bạn có yêu cầu riêng cho sự kiện, cưới hỏi hoặc quay phim? Chúng tôi có thể đáp ứng mọi nhu cầu với dịch vụ tùy chỉnh.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="rounded-md px-3.5 py-2 text-sm font-semibold leading-6 text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Liên Hệ Tư Vấn <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
