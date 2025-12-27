
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import navData from "@/data/Header/header.json";

// SVG Components
function MenuIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  );
}

function CloseIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"></path>
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="
        w-full md:py-4 md:pr-3 md:pl-8 p-4 
        bg-[#FFFFFF1F]
        drop-shadow-[0_10px_34px_0_rgba(0,0,0,0.45)]
        rounded-[20px]
        flex items-center justify-between
      ">
        
        {/* Logo */}
        <a href="/">
        <Image 
          src={navData.logo.image}
          alt={navData.logo.name}
          width={90}
          height={40}
        /></a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-3.5 lg:gap-8 text-white text-base font-medium">
          {navData.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-white transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA (Desktop Only) */}
        <Link
          href={navData.cta.href}
          className="
            hidden md:flex
            bg-[#080808] text-white px-8 py-3 px-8 rounded-2xl
            hover:bg-white hover:text-black transition
            items-center gap-2 text-base font-medium
          "
        >
          {navData.cta.label}
          <div><img src={navData.cta.icon} alt="headerIcon" /></div>
        </Link>

        {/* Hamburger (Mobile) */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(true)}
        >
          <MenuIcon className="w-7 h-7" />
        </button>
      </header>

      {/* Mobile Slide-In Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full z-50
          bg-black/80 backdrop-blur-lg
          p-6 flex flex-col
          transform transition-transform duration-300 ease-out
          ${open ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Close Button */}
        <button
          className="text-white text-3xl mb-8 self-end"
          onClick={() => setOpen(false)}
        >
          <CloseIcon className="w-7 h-7" />
        </button>

        {/* Mobile Nav Links */}
        <nav className="flex flex-col gap-6 text-lg text-white">
          {navData.links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="hover:text-gray-300 transition"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA (Mobile) */}
        <Link
          href={navData.cta.href}
          className="
            mt-10 bg-white text-black font-medium
            px-5 py-2 rounded-lg
            flex items-center gap-2 justify-center
          "
          onClick={() => setOpen(false)}
        >
          {navData.cta.label}
          <span>➜</span>
        </Link>
      </div>
    </>
  );
}
