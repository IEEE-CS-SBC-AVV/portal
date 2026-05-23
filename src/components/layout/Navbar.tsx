"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { scrollYProgress } = useScroll();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/committee", label: "Committee" },
    { href: "/events", label: "Events" },
    { href: "/news", label: "News" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* IEEE Top Bar - Links to IEEE.org ecosystem */}
      <div className="bg-gray-100 border-b border-gray-300 text-sm">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-4">
              <a
                href="https://www.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#00629B] transition"
              >
                IEEE.org
              </a>
              <a
                href="http://ieeexplore.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#00629B] transition"
              >
                IEEE Xplore
              </a>
              <a
                href="http://standards.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#00629B] transition hidden sm:inline"
              >
                IEEE Standards
              </a>
              <a
                href="http://spectrum.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-[#00629B] transition hidden md:inline"
              >
                IEEE Spectrum
              </a>
            </div>
            <a
              href="https://www.ieee.org/sitemap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-[#00629B] transition"
            >
              More Sites
            </a>
          </nav>
        </div>
      </div>

      {/* Main Navigation - Glassmorphism Added */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm transition-all duration-300">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
          <div className="flex justify-between items-center h-16">
            {/* Logo & Title */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:opacity-80 transition shadow-sm">
                <Image
                  src="/assests/Society.jpg"
                  alt="IEEE CS SBC Logo"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold whitespace-nowrap text-[#00629B] group-hover:text-[#002855] transition">
                  IEEE CS SBC
                </span>
                <span className="text-[11px] text-gray-600">
                  Computer Society Student Branch
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden xl:flex items-center gap-2 flex-nowrap">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-3 py-2 whitespace-nowrap text-gray-700 hover:text-[#00629B] font-medium transition-colors relative group rounded-md hover:bg-[#00B5E2]/5"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00629B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Search & Join Button (Desktop) */}
            <div className="hidden xl:flex items-center space-x-4 relative">
              <div className="relative flex items-center">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center bg-gray-100/80 rounded-full px-3 py-1.5 transition-all w-52 xl:w-72 border border-gray-200 focus-within:border-[#00629B]/40 focus-within:bg-white shadow-sm overflow-hidden"
                >
                  <button
                    type="submit"
                    className="focus:outline-none cursor-pointer p-0.5 -ml-1 text-gray-500 hover:text-[#00629B] transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events..."
                    className="w-full px-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 border-none outline-none ring-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus:border-none shadow-none appearance-none"
                    style={{
                      outline: "none",
                      boxShadow: "none",
                      WebkitBoxShadow: "none",
                    }}
                  />
                </form>
              </div>

              {/* Join Button */}
              <Link
                href="/join"
                className="btn-cs-primary no-underline px-6 py-2 whitespace-nowrap shadow-md hover:shadow-lg transition-all"
              >
                Join IEEE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 xl:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-700 transition"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu & Search */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="xl:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-4 space-y-4">
                {/* Mobile Search */}
                <form
                  onSubmit={handleSearch}
                  className="flex items-center w-full relative"
                >
                  <button
                    type="submit"
                    className="focus:outline-none cursor-pointer absolute left-3 text-gray-400 hover:text-[#00629B] transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-100 text-gray-900 border-none rounded-lg outline-none focus:outline-none focus:ring-0 text-base placeholder-gray-500 shadow-none"
                    style={{
                      WebkitBoxShadow: "0 0 0 1000px transparent inset",
                      WebkitTextFillColor: "#111827",
                    }}
                  />
                </form>

                <div className="space-y-1 mt-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-gray-700 hover:bg-[#00B5E2]/10 hover:text-[#00629B] rounded-lg transition font-medium"
                    >
                      {link.label}
                    </Link>
                  ))}

                  {/* Mobile Join Button */}
                  <Link
                    href="/join"
                    onClick={() => setMobileMenuOpen(false)}
                    className="block w-full btn-cs-primary no-underline text-center mt-4 py-3 shadow-md"
                  >
                    Join IEEE
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Scroll Progress Indicator */}
        <motion.div
          className="h-[2px] bg-gradient-to-r from-[#002855] via-[#00629B] to-[#00B5E2] origin-left absolute bottom-0 left-0 right-0"
          style={{ scaleX: scrollYProgress }}
        />
      </nav>
    </>
  );
}
