import type { Metadata } from "next";
import { Users, Calendar, BookOpen, Award, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Home - IEEE CS SBC AVV",
  description:
    "IEEE Computer Society Student Branch at Amrita Vishwa Vidyapeetham. Join 150+ members for workshops, hackathons, and networking events.",
};

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching Reference */}
      <section className="relative min-h-[600px] bg-gradient-to-br from-[#00629B] via-[#00629B] to-[#004B76] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
            }}
          />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            {/* Main Heading */}
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight">
              WELCOME!
            </h1>

            {/* Subheading */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-light text-blue-100 mb-2">
                IEEE Computer Society Student Branch
              </h2>
              <p className="text-xl md:text-2xl text-blue-200">
                Amrita Vishwa Vidyapeetham, Coimbatore Campus
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-4">
              <Users className="h-12 w-12 text-[#00629B] mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-1">150+</div>
              <div className="text-gray-600">Active Members</div>
            </div>
            <div className="text-center p-4">
              <Calendar className="h-12 w-12 text-[#00629B] mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-1">25+</div>
              <div className="text-gray-600">Events Yearly</div>
            </div>
            <div className="text-center p-4">
              <BookOpen className="h-12 w-12 text-[#00629B] mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-gray-600">Workshops</div>
            </div>
            <div className="text-center p-4">
              <Award className="h-12 w-12 text-[#00629B] mx-auto mb-3" />
              <div className="text-4xl font-bold text-gray-900 mb-1">10+</div>
              <div className="text-gray-600">Awards Won</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section - Text Left, CTA Card Right */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Vision Text */}
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IEEE AVV SBC VISION
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  IEEE AVV is a prolific student chapter that aims to inspire
                  professionalism and empower students, help them learn and
                  implement new skills and technologies, gain exemplary
                  knowledge through various engaging workshops and webinars.
                </p>
                <p>
                  Experience in fields of interest like application and website
                  development, robotics and automation, consumer and power
                  electronics, engineering, media, corporate and content
                  writing, carry out research, publish papers, establish a
                  professional profile and network with esteemed IEEE alumni
                  across the globe.
                </p>
                <p>
                  Develop projects that greatly benefit mankind and contribute
                  to advancing technology for humanity.
                </p>
              </div>
            </div>

            {/* Right: Join IEEE CTA Card */}
            <div>
              <div className="bg-white rounded-lg shadow-lg p-8 text-center border border-gray-200">
                {/* Illustration Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 bg-[#E6F2F8] rounded-full flex items-center justify-center">
                  <Users className="w-24 h-24 text-[#00629B]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Join IEEE Today
                </h3>

                {/* Benefits List */}
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Be a part of the world&apos;s largest technology community
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Acquire new skills, and advance your professional growth
                      and development
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      New resources, opportunities and many discounts
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#00629B] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#004B76] transition w-full block text-center"
                >
                  Become a Member
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - CTA Card Left, Text Right */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Join Computer Society CTA Card */}
            <div className="order-2 lg:order-1">
              <div className="bg-gray-50 rounded-lg shadow-lg p-8 text-center border border-gray-200">
                {/* Illustration Placeholder */}
                <div className="w-48 h-48 mx-auto mb-6 bg-[#E6F2F8] rounded-full flex items-center justify-center">
                  <BookOpen className="w-24 h-24 text-[#00629B]" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Join Computer Society
                </h3>

                {/* Benefits List */}
                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Stay updated with latest trends in technology
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Network with colleagues locally and abroad
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">
                      Collaborate on research and projects with leading experts
                    </span>
                  </li>
                </ul>

                {/* CTA Button */}
                <a
                  href="https://www.computer.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-[#00629B] border-2 border-[#00629B] px-8 py-4 rounded-lg font-semibold hover:bg-[#E6F2F8] transition w-full block text-center"
                >
                  Join CS Now
                </a>
              </div>
            </div>

            {/* Right: Mission Text */}
            <div className="order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                IEEE CS SBC AVV MISSION
              </h2>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  IEEE AVV promotes excellence in the field of technical
                  advancement and innovation for the benefit of human society.
                  To outline how IEEE continues to make a mark in all
                  engineering and technology sectors, as its technologies
                  progress.
                </p>
                <p>
                  To encourage the students around to get involved in promoting
                  innovative ideas, fostering creativity, and developing
                  solutions that address real-world challenges.
                </p>
                <p>
                  We provide students with opportunities to enhance their
                  technical skills, foster innovation, and build professional
                  networks through quality events, workshops, and collaborative
                  projects.
                </p>
              </div>

              {/* Additional CTA */}
              <div className="mt-8">
                <button className="inline-flex items-center text-[#00629B] font-semibold hover:text-[#004B76] transition group">
                  View Our Events
                  <svg
                    className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
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
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Involved?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join our vibrant community of technology enthusiasts and innovators.
            Together, we&apos;re advancing technology for humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition">
              Become a Member
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#00629B] transition">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
