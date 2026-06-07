"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { Menu, X, Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { NAV_LINKS, IEEE_LINKS } from "@/lib/constants";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();
  const { scrollYProgress } = useScroll();
  const menuRef = useRef<HTMLDivElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const trapFocus = useCallback(
    (e: React.KeyboardEvent) => {
      if (!mobileMenuOpen || e.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [mobileMenuOpen]
  );

  useEffect(() => {
    if (mobileMenuOpen) {
      const firstFocusable = menuRef.current?.querySelector<HTMLElement>(
        "a[href], button, input"
      );
      firstFocusable?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [mobileMenuOpen]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      {/* IEEE Top Bar - Links to IEEE.org ecosystem */}
      <div className="bg-gray-100 border-b border-gray-300 text-sm">
        <div className="max-w-screen-2xl mx-auto px-6 lg:px-10">
          <nav className="flex items-center justify-between h-10">
            <div className="flex items-center space-x-4">
              {IEEE_LINKS.topBar.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-700 hover:text-[#00629B] transition ${link.label === "IEEE Standards" ? "hidden sm:inline" : ""} ${link.label === "IEEE Spectrum" ? "hidden md:inline" : ""}`}
                >
                  {link.label}
                </a>
              ))}
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
                  src="/assets/favicon/apple-touch-icon.png"
                  alt="IEEE CS SBC Logo"
                  width={44}
                  height={44}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col leading-tight">
                <span className="text-lg font-bold whitespace-nowrap text-[#00629B] group-hover:text-[#002855] transition">
                  IEEE CS @ Amrita
                </span>
                <span className="text-xs text-gray-600">
                  Student Branch Chapter
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-2 flex-nowrap">
              {NAV_LINKS.map((link) => (
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
            <div className="hidden lg:flex items-center space-x-4 relative">
              <div className="relative flex items-center">
                <form
                  onSubmit={handleSearch}
                  className="flex items-center bg-gray-100/80 rounded-full px-3 py-1.5 transition-all w-52 lg:w-72 border border-gray-200 focus-within:border-[#00629B]/40 focus-within:bg-white shadow-sm overflow-hidden"
                >
                  <label htmlFor="desktop-search" className="sr-only">
                    Search events
                  </label>
                  <button
                    type="submit"
                    className="focus:outline-none cursor-pointer p-0.5 -ml-1 text-gray-600 hover:text-[#00629B] transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="h-4 w-4" />
                  </button>
                  <input
                    id="desktop-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search events..."
                    className="w-full px-2 bg-transparent text-sm text-gray-900 placeholder-gray-500 border-none outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00629B]/30 focus-visible:border-[#00629B] shadow-none appearance-none"
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
            <div className="flex items-center space-x-2 lg:hidden">
              <button
                ref={menuButtonRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-md hover:bg-gray-100 text-gray-700 transition focus-visible:ring-2 focus-visible:ring-[#00629B]"
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
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
              ref={menuRef}
              id="mobile-menu"
              role="dialog"
              aria-modal="true"
              aria-labelledby="mobile-menu-label"
              onKeyDown={(e) => {
                 if (e.key === "Escape") {
                   setMobileMenuOpen(false);
                   menuButtonRef.current?.focus();
                   return;
                 }
                 trapFocus(e);
               }}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-md overflow-hidden"
            >
              <div className="px-4 py-2">
                <h2 id="mobile-menu-label" className="text-sm font-semibold text-gray-900">
                    Navigation menu
                  </h2>
                </div>
                <form
                  onSubmit={handleSearch}
                  className="flex items-center w-full relative"
                >
                  <label htmlFor="mobile-search" className="sr-only">
                    Search events
                  </label>
                  <button
                    type="submit"
                    className="focus:outline-none cursor-pointer absolute left-3 text-gray-600 hover:text-[#00629B] transition-colors"
                    aria-label="Submit search"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                  <input
                    id="mobile-search"
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
                  {NAV_LINKS.map((link) => (
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
