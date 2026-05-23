"use client";

import Link from "next/link";
import Image from "next/image";
import { Users, Calendar, BookOpen, Award, CheckCircle } from "lucide-react";
import { motion, Variants } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomePageClient() {
  const [statsRef, statsInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="min-h-screen bg-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative min-h-[500px] text-white overflow-hidden before:absolute before:inset-0 before:bg-black/25 before:z-[1]">
        <motion.div
          initial={{ scale: 1.1, filter: "brightness(0.42)" }}
          animate={{ scale: 1.01 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('/assests/home.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-40">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center"
          >
            <motion.div variants={fadeUpVariant} className="mb-4" />

            <motion.div variants={fadeUpVariant} className="mb-12">
              <h2
                className="text-3xl md:text-4xl font-bold tracking-tight mb-2 drop-shadow-lg"
                style={{ color: "#FFFFFF" }}
              >
                IEEE Computer Society Student Branch Chapter
              </h2>
              <p
                className="text-xl md:text-2xl font-semibold drop-shadow-lg"
                style={{ color: "#FFFFFF" }}
              >
                Amrita Vishwa Vidyapeetham, Coimbatore Campus
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Wave Divider */}
        <div className="absolute -bottom-[1px] left-0 right-0 z-20">
          <svg
            viewBox="0 0 1440 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto block"
            preserveAspectRatio="none"
          >
            <path
              d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
              className="fill-white transition-colors duration-300"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section
        className="py-16 bg-white border-b border-gray-200 transition-colors duration-300"
        ref={statsRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Users, count: 150, label: "Active Members", suffix: "+" },
              {
                icon: Calendar,
                count: 25,
                label: "Events Yearly",
                suffix: "+",
              },
              { icon: BookOpen, count: 50, label: "Workshops", suffix: "+" },
              { icon: Award, count: 10, label: "Awards Won", suffix: "+" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="text-center p-6 rounded-xl bg-gray-50 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <stat.icon className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
                <div className="text-4xl font-bold text-gray-900 mb-2">
                  {statsInView ? (
                    <CountUp end={stat.count} duration={2.5} />
                  ) : (
                    "0"
                  )}
                  {stat.suffix}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
            >
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-44 h-44 mx-auto mb-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-50 transition-colors">
                  <Image
                    src="/assests/ieee.png"
                    alt="IEEE Membership"
                    width={225}
                    height={225}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Join IEEE Today
                </h3>

                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      Be a part of the world&apos;s largest technology community
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      Acquire new skills, and advance your professional growth
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      New resources, opportunities and discounts
                    </span>
                  </li>
                </ul>

                <a
                  href="https://www.ieee.org/membership/join/index.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#00629B] to-[#004B76] !text-white px-8 py-3 rounded-lg font-bold text-base hover:opacity-90 transition no-underline shadow-md"
                >
                  Become a Member
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="w-44 h-44 mx-auto mb-8 rounded-full flex items-center justify-center overflow-hidden bg-gray-50 transition-colors">
                  <Image
                    src="/assests/Society.jpg"
                    alt="Computer Society"
                    width={200}
                    height={200}
                    className="w-full h-full object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Join Computer Society
                </h3>

                <ul className="text-left space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      Stay updated with latest trends in technology
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      Network with colleagues locally and abroad
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 ">
                      Collaborate on research and projects
                    </span>
                  </li>
                </ul>

                <a
                  href="https://www.computer.org/membership"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-gradient-to-r from-[#00629B] to-[#004B76] !text-white px-8 py-3 rounded-lg font-bold text-base hover:opacity-90 transition no-underline shadow-md"
                >
                  Join CS Now
                </a>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUpVariant}
              className="order-1 lg:order-2"
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 relative overflow-hidden bg-gradient-to-br from-[#00629B] to-[#002855] text-white">
        <div className="absolute inset-0 bg-[url('/assests/home.jpeg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-md">
              Ready to Get Involved?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Join our vibrant community of technology enthusiasts and
              innovators. Together, we&apos;re advancing technology for
              humanity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-xl hover:shadow-2xl inline-block text-center no-underline hover:-translate-y-0.5 duration-200"
              >
                Become a Member
              </Link>
              <Link
                href="/contact"
                className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-50 transition shadow-xl hover:shadow-2xl inline-block text-center no-underline hover:-translate-y-0.5 duration-200"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
