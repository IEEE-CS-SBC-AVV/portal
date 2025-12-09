import Link from "next/link";
import { Users, Calendar, BookOpen, Award } from "lucide-react";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-ieee-blue to-ieee-blue-dark text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              WELCOME!
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl mb-8 text-blue-100 font-light">
              IEEE Computer Society Student Branch
            </h2>
            <p className="text-xl md:text-2xl mb-10 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Empowering students through technology, innovation, and
              professional development
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-white text-ieee-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg"
              >
                Join IEEE Today
              </Link>
              <Link
                href="/events"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-ieee-blue transition-all"
              >
                Upcoming Events
              </Link>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="p-6">
              <Users className="h-12 w-12 text-ieee-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">150+</div>
              <div className="text-gray-600 mt-1">Active Members</div>
            </div>
            <div className="p-6">
              <Calendar className="h-12 w-12 text-ieee-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">25+</div>
              <div className="text-gray-600 mt-1">Events Yearly</div>
            </div>
            <div className="p-6">
              <BookOpen className="h-12 w-12 text-ieee-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">50+</div>
              <div className="text-gray-600 mt-1">Workshops</div>
            </div>
            <div className="p-6">
              <Award className="h-12 w-12 text-ieee-blue mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900">10+</div>
              <div className="text-gray-600 mt-1">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Vision
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                To be the leading student organization fostering innovation,
                technical excellence, and professional development in computer
                science and engineering.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We envision a community where students collaborate, learn, and
                grow together, preparing themselves to become future technology
                leaders who will advance technology for humanity.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-ieee-blue font-semibold hover:text-ieee-blue-dark transition"
              >
                Learn More About Us
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="ieee-card p-8 text-center bg-white">
                <div className="text-6xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join IEEE Today
                </h3>
                <ul className="text-left space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Access to exclusive workshops and seminars
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Networking with industry professionals
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Career development opportunities
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    IEEE Xplore digital library access
                  </li>
                </ul>
                <Link
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  className="btn-ieee-primary w-full block text-center"
                >
                  Become a Member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="ieee-card p-8 text-center bg-gray-50">
                <div className="text-6xl mb-4">💻</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Join Computer Society
                </h3>
                <ul className="text-left space-y-3 mb-6 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Technical magazines and publications
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Discounts on conferences and events
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Professional certifications
                  </li>
                  <li className="flex items-start">
                    <span className="text-ieee-blue mr-2">✓</span>
                    Global computing community access
                  </li>
                </ul>
                <Link
                  href="https://www.computer.org/membership"
                  target="_blank"
                  className="btn-ieee-secondary w-full block text-center"
                >
                  Join CS Now
                </Link>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                To provide students with opportunities to enhance their
                technical skills, foster innovation, and build professional
                networks through quality events, workshops, and collaborative
                projects.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                We are committed to creating an inclusive environment where
                every member can explore their interests, develop their talents,
                and contribute to advancing technology for the benefit of
                humanity.
              </p>
              <Link
                href="/events"
                className="inline-flex items-center text-ieee-blue font-semibold hover:text-ieee-blue-dark transition"
              >
                View Our Events
                <svg
                  className="w-5 h-5 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
