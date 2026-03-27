// app/about/page.tsx

import { UserGroupIcon, StarIcon, CalendarDaysIcon, CheckBadgeIcon } from "@heroicons/react/24/outline";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO & Founder",
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
  },
  {
    name: "Jane Smith",
    role: "COO",
    imageUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop",
  },
  {
    name: "Samuel Green",
    role: "Lead Designer",
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop",
  },
    {
    name: "Lisa Brown",
    role: "Marketing Director",
    imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
  },
];

const stats = [
    { id: 1, name: 'Năm kinh nghiệm', value: '10+', icon: CalendarDaysIcon },
    { id: 2, name: 'Khách hàng hài lòng', value: '5000+', icon: UserGroupIcon },
    { id: 3, name: 'Dự án hoàn thành', value: '1200+', icon: CheckBadgeIcon },
    { id: 4, name: 'Đánh giá 5 sao', value: '98%', icon: StarIcon },
]

const timeline = [
    { year: "2014", description: "VougeRent được thành lập với sứ mệnh thay đổi ngành cho thuê xe." },
    { year: "2016", description: "Mở rộng đội xe với các dòng xe sang từ Mercedes, BMW." },
    { year: "2018", description: "Đạt mốc 1000 khách hàng thân thiết." },
    { year: "2021", description: "Ra mắt nền tảng đặt xe trực tuyến hiện đại." },
    { year: "2024", description: "Trở thành đối tác tin cậy của nhiều sự kiện lớn." },
]

export default function AboutPage() {
  return (
    <div className="bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
         <img
          src="https://images.unsplash.com/photo-1517524206127-48bbd363f3d7?q=80&w=2070&auto=format&fit=crop"
          alt="About us banner"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-60"></div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 relative">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Về VougeRent
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Sứ mệnh của chúng tôi là mang đến những trải nghiệm lái xe đẳng cấp và khó quên, kết hợp giữa sự sang trọng và dịch vụ khách hàng hoàn hảo.
            </p>
          </div>
        </div>
      </div>

      {/* About Us Section */}
       <div className="overflow-hidden bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">
                        <div className="lg:max-w-lg">
                            <h2 className="text-base font-semibold leading-7 text-indigo-600 dark:text-indigo-400">Về Chúng Tôi</h2>
                            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Lịch sử và Giá trị cốt lõi</p>
                            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                                Được thành lập từ năm 2014, VougeRent khởi đầu với một đam mê cháy bỏng: mang những chiếc xe sang trọng và đẳng cấp đến gần hơn với mọi người. Chúng tôi tin rằng mỗi chuyến đi không chỉ là di chuyển, mà là một trải nghiệm.
                            </p>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 dark:text-gray-300 lg:max-w-none">
                               <div className="relative pl-9">
                                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                                    Đẳng cấp:
                                  </dt>
                                  <dd className="inline ml-2">Cung cấp những dòng xe thời thượng và sang trọng nhất.</dd>
                                </div>
                                <div className="relative pl-9">
                                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                                    Tin cậy:
                                  </dt>
                                  <dd className="inline ml-2">Luôn đảm bảo an toàn, minh bạch và đúng hẹn.</dd>
                                </div>
                                <div className="relative pl-9">
                                  <dt className="inline font-semibold text-gray-900 dark:text-white">
                                    Tận tâm:
                                  </dt>
                                  <dd className="inline ml-2">Dịch vụ khách hàng chuyên nghiệp, hỗ trợ 24/7.</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                     <img
                        src="https://images.unsplash.com/photo-1617503752587-77ae121267b1?q=80&w=1932&auto=format&fit=crop"
                        alt="Office workspace"
                        className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={800}
                        height={600}
                    />
                </div>
            </div>
        </div>

      {/* Team Section */}
      <div className="bg-gray-100 dark:bg-gray-800 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Đội Ngũ Của Chúng Tôi
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Những con người đầy nhiệt huyết đứng sau thành công của VougeRent.
            </p>
          </div>
          <ul
            role="list"
            className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4"
          >
            {teamMembers.map((person) => (
              <li key={person.name} className="text-center">
                <img
                  className="mx-auto h-56 w-56 rounded-full object-cover"
                  src={person.imageUrl}
                  alt={person.name}
                  width={224}
                  height={224}
                />
                <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-sm leading-6 text-indigo-600 dark:text-indigo-400">{person.role}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

       {/* Achievements Section */}
        <div className="bg-white dark:bg-gray-900 py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                 <div className="mx-auto max-w-2xl lg:max-w-none">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Thành Tựu Của Chúng Tôi</h2>
                        <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-400">Những con số biết nói về sự nỗ lực không ngừng nghỉ.</p>
                    </div>
                    <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 text-center sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div key={stat.id} className="flex flex-col items-center">
                                <dt className="text-base leading-7 text-gray-600 dark:text-gray-400">{stat.name}</dt>
                                <dd className="order-first text-3xl font-semibold tracking-tight text-indigo-600 dark:text-indigo-400 sm:text-5xl">
                                    {stat.value}
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>

      {/* Timeline Section */}
        <div className="py-24 sm:py-32 bg-gray-100 dark:bg-gray-800">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Hành Trình Phát Triển</h2>
                     <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-400">Các cột mốc quan trọng trên con đường xây dựng và phát triển của VougeRent.</p>
                </div>
                <div className="mt-16 flow-root">
                    <div className="-my-8">
                        {timeline.map((event, eventIdx) => (
                            <div key={event.year} className="relative py-8 pl-8 sm:pl-12">
                                {eventIdx !== timeline.length - 1 ? (
                                    <span className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-300 dark:bg-gray-600" aria-hidden="true" />
                                ) : null}
                                <div className="relative flex items-start space-x-3">
                                    <div className="relative">
                                         <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500 ring-8 ring-white dark:ring-gray-700">
                                            <CalendarDaysIcon className="h-5 w-5 text-white" aria-hidden="true" />
                                        </div>
                                    </div>
                                    <div className="min-w-0 flex-1">
                                        <p className="text-xl font-semibold text-gray-900 dark:text-white">{event.year}</p>
                                        <p className="mt-1 text-base text-gray-600 dark:text-gray-400">{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
