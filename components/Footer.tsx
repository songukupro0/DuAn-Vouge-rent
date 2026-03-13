// components/Footer.tsx
import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapPinIcon,
} from "@heroicons/react/24/outline";

const footerLinks = {
  quickLinks: [
    { name: "Trang chủ", href: "/" },
    { name: "Giới thiệu", href: "/about" },
    { name: "Dịch vụ", href: "/services" },
    { name: "Liên hệ", href: "/contact" },
  ],
  social: [
    {
      name: "Facebook",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
        </svg>
      ),
    },
    {
      name: "Twitter",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.61.82 3.027 2.074 3.863-.69-.025-1.335-.214-1.902-.523v.062c0 2.248 1.595 4.123 3.713 4.555-.31.084-.64.128-.975.128-.298 0-.586-.029-.868-.083.593 1.844 2.306 3.185 4.34 3.223-1.583 1.241-3.583 1.983-5.753 1.983-.372 0-.74-.022-1.102-.064 2.044 1.309 4.474 2.073 7.078 2.073 8.484 0 13.121-7.022 13.121-13.121 0-.2 0-.4-.015-.6.9-.652 1.683-1.472 2.3-2.39z" />
        </svg>
      ),
    },
    {
      name: "Instagram",
      href: "#",
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.059 1.689.073 4.948.073s3.667-.014 4.947-.072c4.358-.2 6.78-2.618 6.98-6.98.059-1.281.073-1.689.073-4.948s-.014-3.667-.072-4.947c-.2-4.358-2.618-6.78-6.98-6.98-1.281-.059-1.689-.073-4.948-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.441 1.441 1.441 1.441-.645 1.441-1.441-.645-1.44-1.441-1.44z" />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
             <a href="#" className="-m-1.5 p-1.5 flex items-center">
                <svg className="h-8 w-auto text-indigo-400" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M4 20l5 -15a2 2 0 1 1 4 0l5 15"></path>
                    <path d="M12 20v-15"></path>
                    <path d="M4 12h16"></path>
                </svg>
                <span className="ml-2 text-2xl font-bold tracking-wider">VougeRent</span>
            </a>
            <p className="text-sm leading-6 text-gray-300">
              Dịch vụ cho thuê xe sang trọng, đẳng cấp hàng đầu. Mang đến trải nghiệm tuyệt vời trên mọi nẻo đường.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-1 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
                <div>
                    <h3 className="text-sm font-semibold leading-6 text-indigo-400">Quick Links</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        {footerLinks.quickLinks.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="text-sm leading-6 text-gray-300 hover:text-white">
                            {item.name}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="mt-10 md:mt-0">
                    <h3 className="text-sm font-semibold leading-6 text-indigo-400">Liên hệ</h3>
                    <ul role="list" className="mt-6 space-y-4">
                        <li className="flex gap-x-3">
                            <MapPinIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                            <span className="text-sm leading-6 text-gray-300">123 Đường ABC, Quận 1, TP.HCM</span>
                        </li>
                        <li className="flex gap-x-3">
                            <DevicePhoneMobileIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                            <span className="text-sm leading-6 text-gray-300">+84 123 456 789</span>
                        </li>
                        <li className="flex gap-x-3">
                            <EnvelopeIcon className="h-6 w-5 flex-none text-gray-400" aria-hidden="true" />
                            <span className="text-sm leading-6 text-gray-300">contact@vougerent.com</span>
                        </li>
                    </ul>
                </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-xs leading-5 text-gray-400 order-2 sm:order-1 mt-4 sm:mt-0">&copy; 2024 VougeRent, Inc. All rights reserved.</p>
          <div className="flex space-x-6 sm:justify-start order-1 sm:order-2">
            {footerLinks.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
