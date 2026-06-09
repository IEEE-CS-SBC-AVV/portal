import type { Metadata } from "next";
import Link from "next/link";
import { MemberCard } from "@/components/MemberCard";
import committeeData from "../../../content/committee/members.json";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";

export const metadata: Metadata = {
  title: "Committee",
  description:
    "Meet the leadership and committee members of IEEE Computer Society Student Branch at Amrita - faculty advisors and student officers.",
  openGraph: {
    title: "Committee | IEEE CS @ Amrita",
    description:
      "Meet the leadership and committee members of IEEE Computer Society Student Branch at Amrita - faculty advisors and student officers.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "IEEE CS @ Amrita Committee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Committee | IEEE CS @ Amrita",
    description:
      "Meet the leadership and committee members of IEEE Computer Society Student Branch at Amrita - faculty advisors and student officers.",
    images: ["/assets/Society.jpg"],
  },
};

export default function CommitteePage() {
  return (
    <div>
      <Breadcrumbs segments={[{ label: "Committee" }]} />
      <PageHeader
        title="Our Committee"
        description="Meet the dedicated team driving our chapter's success"
      />

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
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Executive Committee
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.executive.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
                <MemberCard {...member} />
              </div>
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
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.treasurer.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Team */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Technical Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.technical.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
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
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.webmaster.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Content Team */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Content Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.publicity.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
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
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.design.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Team */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Newsletter Team
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {committeeData.newsletter.map((member) => (
              <div key={member.id} className="w-full sm:w-72">
                <MemberCard {...member} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WIE Representative */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            WIE Representative
          </h2>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto">
            {committeeData.wie.map((member) => (
              <div key={member.id} className="w-full md:w-80">
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
          <p className="text-xl text-white mb-8">
            We&apos;re always looking for passionate students to join our
            committee and help drive our chapter forward.
          </p>
          <Link href="/contact" className="btn-cs-white">
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
