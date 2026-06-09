import Link from "next/link";
import { Mail, Linkedin, Instagram, MapPin, Phone } from "lucide-react";
import {
  SITE_CONFIG,
  IEEE_LINKS,
  CONTACT_INFO,
  NAV_LINKS,
} from "@/lib/constants";

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
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              {SITE_CONFIG.description} Part of the world&apos;s largest
              technical professional organization.
            </p>
            {/* Social Media */}
            <div className="flex space-x-3">
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-[#00629B] hover:bg-gray-700 transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-[#00629B] hover:bg-gray-700 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={CONTACT_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 bg-gray-800 rounded-full flex items-center justify-center text-gray-300 hover:text-[#00629B] hover:bg-gray-700 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-[#00629B] transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Visit IEEE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Visit IEEE
            </h3>
            <ul className="space-y-2 text-sm">
              {IEEE_LINKS.footer.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[#00629B] transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <Mail
                  className="w-4 h-4 text-gray-300 mr-2 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-gray-300 hover:text-[#00629B] transition"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-start">
                <Phone
                  className="w-4 h-4 text-gray-300 mr-2 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <a
                  href={CONTACT_INFO.phoneLink}
                  className="text-gray-300 hover:text-[#00629B] transition"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-start">
                <MapPin
                  className="w-4 h-4 text-gray-300 mr-2 mt-0.5 flex-shrink-0"
                  aria-hidden="true"
                />
                <span className="text-gray-300">
                  {CONTACT_INFO.address.map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < CONTACT_INFO.address.length - 1 && <br />}
                    </span>
                  ))}
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
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs mb-4">
            {IEEE_LINKS.legal.map((link, i) => (
              <span key={link.href}>
                {i > 0 && (
                  <span className="text-gray-700 mx-2" aria-hidden="true">
                    •
                  </span>
                )}
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#00629B] transition"
                >
                  {link.label}
                </a>
              </span>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-gray-400 text-xs mb-2">
              &copy; Copyright {currentYear} IEEE &ndash; All rights reserved.
              Use of this website signifies your agreement to the IEEE Terms and
              Conditions.
            </p>
            <p className="text-gray-400 text-xs">
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
