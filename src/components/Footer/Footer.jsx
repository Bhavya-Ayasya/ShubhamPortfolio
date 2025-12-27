import Image from "next/image";
import footerData from "@/data/Footer/footerData.json";

export default function Footer() {
  return (
    <footer className="w-full text-white py-10">
      
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <Image
          src={footerData.logo}
          width={113}
          height={40}
          alt="footer-logo"
          className="object-contain"
        />
      </div>

      {/* Menu */}
      <nav className="flex justify-between text-[#FFFFFF] text-lg mb-10 md:mt-10 mt-8 max-w-[434px] w-full mx-auto">
        {footerData.menu.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="hover:text-white transition md:text-base text-sm"
          >
            {item.label}
          </a>
        ))}
      </nav>

      <hr className="border-gray-700 max-w-6xl mx-auto mb-6" />

      {/* Bottom Section */}
      <div className="max-w-6xl mx-auto flex justify-between items-center">

        {/* Copyright */}
        <div className="flex items-center gap-2 text-[#FFFFFF]">
          <span className="text-xl">©</span>
          <p>{footerData.copyright}</p>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5">
          {footerData.socialIcons.map((item) => (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={item.icon}
                width={22}
                height={22}
                alt="social-icon"
                className="cursor-pointer opacity-80 hover:opacity-100 transition"
              />
            </a>
          ))}
        </div>

      </div>
    </footer>
  );
}
