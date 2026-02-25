import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
      <section className="relative min-h-[600px] text-white overflow-hidden">
        {/* Move background and brightness to this separate div */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assests/home.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            filter: "brightness(0.6)",
            transform: "scale(1.01)", // This pushes the image 1% past the edges to hide gaps
          }}
        />

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <div className="text-center">
            {/* Main Heading */}
            <h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 tracking-tight"
              style={{
                color: "#FFFFFF",
                textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
              }}
            >
              WELCOME!
            </h1>

            {/* Subheading */}
            <div className="mb-12">
              <h2
                className="text-2xl md:text-3xl font-light mb-2"
                style={{
                  color: "#FFFFFF",
                  textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                IEEE Computer Society Student Branch Chapter
              </h2>
              <p
                className="text-xl md:text-2xl"
                style={{
                  color: "#FFFFFF",
                  textShadow: "0px 2px 10px rgba(0,0,0,0.5)",
                }}
              >
                Amrita Vishwa Vidyapeetham, Coimbatore Campus
              </p>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        {/* Change bottom-0 to -bottom-[1px] */}
        <div className="absolute -bottom-[1px] left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block" // Added 'block' to prevent baseline spacing
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              fill="#FFFFFF"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-16 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Users className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Active Members</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Calendar className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Events Yearly</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <BookOpen className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Workshops</div>
            </div>
            <div className="text-center p-6 rounded-lg bg-gray-50">
              <Award className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">10+</div>
              <div className="text-gray-600 font-medium">Awards Won</div>
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
              <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-[#00629B] hover:shadow-xl transition">
                {/* Illustration Placeholder */}
                <div className="w-48 h-48 mx-auto mb-8 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assests/ieee.png"
                    alt="IEEE Membership"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
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
                  style={{ color: "#ffffff" }}
                  className="inline-flex items-center justify-center w-full bg-[#00629B] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#004B76] transition no-underline"
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
              <div className="bg-white rounded-xl shadow-lg p-8 text-center border-2 border-[#00629B] hover:shadow-xl transition">
                {/* Illustration Placeholder */}
                <div className="w-48 h-48 mx-auto mb-8 rounded-full flex items-center justify-center overflow-hidden">
                  <Image
                    src="/assests/Society.jpg"
                    alt="Computer Society"
                    width={192}
                    height={192}
                    className="w-full h-full object-cover"
                  />
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
                  style={{ color: "#ffffff" }}
                  className="inline-flex items-center justify-center w-full bg-[#00629B] px-8 py-3 rounded-lg font-bold text-base hover:bg-[#004B76] transition no-underline"
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
                <Link
                  href="/events"
                  className="inline-flex items-center text-[#00629B] font-semibold hover:text-[#004B76] transition group"
                >
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
                </Link>
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
          <p className="text-xl text-white/90 mb-8">
            Join our vibrant community of technology enthusiasts and innovators.
            Together, we&apos;re advancing technology for humanity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join"
              className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block text-center no-underline"
            >
              Become a Member
            </Link>
            <Link
              href="/contact"
              className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block text-center no-underline"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
