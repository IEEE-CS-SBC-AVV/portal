"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/committee", label: "Committee" },
    { href: "/events", label: "Events" },
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
                className="text-gray-700 hover:text-ieee-blue transition"
              >
                IEEE.org
              </a>
              <a
                href="http://ieeexplore.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-ieee-blue transition"
              >
                IEEE Xplore
              </a>
              <a
                href="http://standards.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-ieee-blue transition hidden sm:inline"
              >
                IEEE Standards
              </a>
              <a
                href="http://spectrum.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-ieee-blue transition hidden md:inline"
              >
                IEEE Spectrum
              </a>
            </div>
            <a
              href="https://www.ieee.org/sitemap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-ieee-blue transition"
            >
              More Sites
            </a>
          </nav>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white border-b border-gray-300 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo & Title */}
            <Link href="/" className="flex items-center space-x-4">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-ieee-blue tracking-tight">
                  IEEE CS SBC
                </span>
                <span className="text-xs text-gray-600 -mt-1">
                  Computer Society Student Branch
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-ieee-blue font-medium transition-colors relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-ieee-blue transition-all group-hover:w-full"></span>
                </Link>
              ))}
              <Link
                href="/join"
                className="btn-ieee-primary inline-block text-center"
              >
                Join IEEE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-300 bg-white">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:bg-ieee-blue-light hover:text-ieee-blue rounded-md transition"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full btn-ieee-primary text-center mt-4"
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
