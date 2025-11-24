"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface SidebarProps {
  children: ReactNode;
  title?: string;
}

export default function Sidebar({ children, title }: SidebarProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ===================== HEADER + NAVBAR ===================== */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">

        {/* Top Bar */}
        <div className="bg-[#1a365d] text-white py-2 px-4">
          <div className="container mx-auto text-center text-sm">
            🏆 <strong>LIVE:</strong> Kejuaraan Atletik Nasional 2024 - Hari Terakhir
            <span className="ml-4 bg-white text-[#1a365d] px-2 py-1 rounded text-xs font-bold">LIVE</span>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="container mx-auto py-4 px-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">

            {/* Logo */}
            <div className="flex items-center gap-3 transform transition-all duration-300 hover:scale-105">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="AtletikNow Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-[#1a365d]">AtletikNow</h1>
                <p className="text-xs text-gray-600">Portal Atletik Indonesia</p>
              </div>
            </div>

            {/* ===================== DESKTOP NAV ===================== */}
            <div className="hidden lg:flex flex-wrap justify-center gap-6 lg:gap-8 font-semibold">
              
              {/* TEMPLATE ANIMASI NAV */}
              {[
                { href: "/", label: "Beranda" },
                { href: "/berita", label: "Berita" },
                { href: "/profil", label: "Profil" },
                /*{ href: "/jadwal", label: "Jadwal" },
                { href: "/prestasi", label: "Prestasi" },*/
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    relative flex items-center gap-1
                    ${
                      pathname === item.href
                        ? "text-[#1a365d]"
                        : "text-gray-700 hover:text-[#1a365d]"
                    }
                    transition-all duration-300
                    after:content-['']
                    after:absolute after:left-0 after:-bottom-1
                    after:h-[2px] after:bg-[#1a365d]
                    after:transition-all after:duration-300
                    after:w-0
                    hover:after:w-full
                  `}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* SEARCH BAR */}
            <div className="hidden lg:flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari berita atletik..."
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1a365d] text-sm w-64 transition-all duration-300"
                />
                <svg className="w-5 h-5 text-gray-400 absolute left-3 top-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* MOBILE BUTTON */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden bg-[#1a365d] text-white px-4 py-2 rounded-lg shadow font-semibold transition-all duration-300 hover:bg-[#163052]"
            >
              {isOpen ? "Tutup" : "Menu"}
            </button>
          </div>
        </nav>

        {/* ===================== MOBILE NAV ===================== */}
        {isOpen && (
          <div className="lg:hidden bg-white border-t px-6 py-4 space-y-4 animate-fade-in">
            {[
              { href: "/", label: "Home" },
              { href: "/profil", label: "Profil Atlet" },
              { href: "/berita", label: "Berita" },
              { href: "/jadwal", label: "Jadwal" },
              { href: "/prestasi", label: "Prestasi" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block font-semibold text-gray-700 transition-all duration-300 hover:translate-x-2 hover:text-[#1a365d]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      {/* ===================== PAGE TITLE ===================== */}
      {title && (
        <h1 className="text-3xl font-bold text-blue-800 mt-10 px-6 tracking-wide">
          {title}
        </h1>
      )}

      {/* ===================== PAGE CONTENT ===================== */}
      <div className="mt-6 px-6 pb-10">{children}</div>
    </>
  );
}
