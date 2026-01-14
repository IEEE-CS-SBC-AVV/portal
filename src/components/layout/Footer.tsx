import Link from "next/link";
import { Mail, Linkedin, Instagram, MapPin, Phone } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white">
              IEEE CS Student Branch
            </h3>
            <p className="text-gray-400 mb-4 text-sm leading-relaxed">
              Empowering students through technology, innovation, and
              professional development. Part of the world&apos;s largest
              technical professional organization.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href="mailto:computersociety.avv@gmail.com"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-ieee-blue hover:bg-gray-700 transition"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/computer-society-avv"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-ieee-blue hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="https://www.instagram.com/cs_asai_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-gray-800 rounded-full flex items-center justify-center text-gray-400 hover:text-ieee-blue hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/committee"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Committee
                </Link>
              </li>
              <li>
                <Link
                  href="/events"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit IEEE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Visit IEEE
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="https://www.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE.org
                </a>
              </li>
              <li>
                <a
                  href="http://ieeexplore.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE Xplore Digital Library
                </a>
              </li>
              <li>
                <a
                  href="https://www.computer.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE Computer Society
                </a>
              </li>
              <li>
                <a
                  href="http://standards.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE Standards
                </a>
              </li>
              <li>
                <a
                  href="http://spectrum.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE Spectrum
                </a>
              </li>
              <li>
                <a
                  href="https://students.ieee.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  IEEE Student Activities
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:computersociety.avv@gmail.com"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  computersociety.avv@gmail.com
                </a>
              </li>
              <li className="flex items-start">
                <Phone className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+917397468974"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  +91-7397468974
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="w-4 h-4 text-gray-400 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400">
                  Amrita School of Artificial Intelligence
                  <br />
                  Amrita Vishwa Vidyapeetham, Ettimadai
                  <br />
                  Coimbatore - 641112
                  <br />
                  Tamil Nadu, India
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* IEEE Legal Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          {/* IEEE Required Links */}
          <div className="flex flex-wrap justify-center gap-4 text-xs mb-4">
            <a
              href="http://www.ieee.org/sitemap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              Sitemap
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://www.ieee.org/accessibility-statement.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              Accessibility
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://www.ieee.org/about/corporate/governance/p9-26.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              Nondiscrimination Policy
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="http://www.ieee-ethics-reporting.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              IEEE Ethics Reporting
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="http://www.ieee.org/site_terms_conditions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              Terms & Conditions
            </a>
            <span className="text-gray-700">•</span>
            <a
              href="https://www.ieee.org/security_privacy.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-ieee-blue transition"
            >
              Privacy Policy
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-500 text-xs mb-2">
              © Copyright {currentYear} IEEE – All rights reserved. Use of this
              website signifies your agreement to the IEEE Terms and Conditions.
            </p>
            <p className="text-gray-600 text-xs">
              A public charity, IEEE is the world&apos;s largest technical
              professional organization dedicated to advancing technology for
              the benefit of humanity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
