import Link from "next/link";
import { Mail, Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-auto">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4 text-white">
              IEEE Computer Society Student Branch
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Empowering students through technology, innovation, and
              professional development. Join us in advancing technology for
              humanity.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:contact@ieeecs.edu"
                className="text-gray-400 hover:text-ieee-blue transition"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ieee-blue transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ieee-blue transition"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ieee-blue transition"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-ieee-blue transition"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
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
                  href="/contact"
                  className="text-gray-400 hover:text-ieee-blue transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Visit IEEE */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">
              Visit IEEE
            </h3>
            <ul className="space-y-2">
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
                  IEEE Xplore
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
        </div>
      </div>

      {/* IEEE Legal Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm text-center md:text-left">
              &copy; {currentYear} IEEE Computer Society Student Branch
              Committee. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end gap-4 text-sm">
              <a
                href="https://www.ieee.org/about/help/site-terms-conditions.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-ieee-blue transition"
              >
                Terms & Conditions
              </a>
              <a
                href="https://www.ieee.org/security-privacy.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-ieee-blue transition"
              >
                Privacy Policy
              </a>
              <a
                href="https://www.ieee.org/about/corporate/governance/p9-26.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-ieee-blue transition"
              >
                Nondiscrimination Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
