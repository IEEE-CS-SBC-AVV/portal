"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/committee", label: "Committee" },
    { href: "/events", label: "Events" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* IEEE Top Bar - Links to IEEE.org ecosystem */}
      <div className="bg-gray-100 border-b border-gray-300 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo & Title */}
            <Link href="/" className="flex items-center space-x-3 group">
              {/* Logo Placeholder - Replace with actual logo */}
              <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden group-hover:opacity-80 transition">
                <Image
                  src="/assests/Society.jpg"
                  alt="IEEE CS SBC Logo"
                  width={56}
                  height={56}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#00629B] group-hover:text-[#002855] transition">
                  IEEE CS SBC
                </span>
                <span className="text-xs text-gray-600 -mt-0.5">
                  Computer Society Student Branch
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-gray-700 hover:text-[#00629B] font-medium transition-colors relative group rounded-md hover:bg-[#00B5E2]/10"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#00629B] transition-all group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* Search & Join Button (Desktop) */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Search Bar */}
              <div className="relative">
                {searchOpen ? (
                  <div className="flex items-center">
                    <input
                      type="search"
                      placeholder="Search..."
                      className="w-64 px-4 py-2 border-2 border-[#00629B] rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#00B5E2]/30"
                      autoFocus
                    />
                    <button
                      onClick={() => setSearchOpen(false)}
                      className="px-4 py-2 bg-[#00629B] text-white rounded-r-md hover:bg-[#002855] transition"
                    >
                      <Search className="h-5 w-5" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => setSearchOpen(true)}
                    className="p-2 text-gray-600 hover:text-[#00629B] hover:bg-[#00B5E2]/10 rounded-md transition"
                    aria-label="Open search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                )}
              </div>

              {/* Join Button */}
              <Link
                href="/join"
                className="btn-cs-primary no-underline px-6 py-2 whitespace-nowrap"
              >
                Join IEEE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Search Icon */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
                aria-label="Search"
              >
                <Search className="h-6 w-6" />
              </button>

              {/* Hamburger Menu */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-700"
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

          {/* Mobile Search Bar */}
          {searchOpen && (
            <div className="lg:hidden pb-4">
              <div className="flex items-center">
                <input
                  type="search"
                  placeholder="Search..."
                  className="flex-1 px-4 py-2 border-2 border-gray-300 rounded-l-md focus:outline-none focus:border-[#00629B]"
                />
                <button className="px-4 py-2 bg-[#00629B] text-white rounded-r-md hover:bg-[#002855] transition">
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-300 bg-white">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-[#00B5E2]/10 hover:text-[#00629B] rounded-md transition font-medium"
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Join Button */}
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full btn-cs-primary no-underline text-center mt-4 py-3"
              >
                Join IEEE
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
