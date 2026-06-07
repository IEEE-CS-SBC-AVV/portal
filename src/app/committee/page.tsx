import type { Metadata } from "next";
import { MemberCard } from "@/components/MemberCard";
import committeeData from "./members.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  title: "Committee",
  description:
    "Meet the leadership and committee members of IEEE Computer Society Student Branch at Amrita - faculty advisors and student officers.",
};

export default function CommitteePage() {
  return (
    <div>
      <Breadcrumbs segments={[{ label: "Committee" }]} />
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Committee</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Meet the dedicated team driving our chapter&apos;s success
          </p>
        </div>
      </section>

      {/* Faculty Advisor */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Faculty Advisor
          </h2>
          <div className="max-w-md mx-auto">
            <MemberCard {...committeeData.facultyAdvisor} />
          </div>
        </div>
      </section>

      {/* Executive Committee */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Executive Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {committeeData.executive.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Treasurer */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Treasurer
          </h2>
          <div className="max-w-md mx-auto">
            {committeeData.treasurer.map((member, index) => (
              <MemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Executive Core Committee
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.technical.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Webmaster */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Webmaster
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.webmaster.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Content Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.publicity.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Design Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.design.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Team */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Newsletter Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.newsletter.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WICE Representative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            WICE Representative
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.wice.map((member, index) => (
              <div key={index} className="w-full md:w-80">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            We&apos;re always looking for passionate students to join our
            committee and help drive our chapter forward.
          </p>
          <a
            href="/contact"
            className="bg-white text-[#00629B] px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block no-underline"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
