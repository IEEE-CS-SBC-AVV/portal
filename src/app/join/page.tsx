import type { Metadata } from "next";
import Link from "next/link";
import {
  Users,
  BookOpen,
  Globe,
  Award,
  Briefcase,
  TrendingUp,
  CheckCircle,
  ExternalLink,
} from "lucide-react";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { FAQAccordion } from "@/components/FAQAccordion";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { PageHeader } from "@/components/PageHeader";
import { MEMBERSHIP_PRICES, STATS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Join",
  description:
    "Join IEEE Computer Society Student Branch at Amrita. Learn about membership benefits, pricing, and how to become part of our technical community.",
  openGraph: {
    title: "Join IEEE CS @ Amrita",
    description:
      "Join IEEE Computer Society Student Branch at Amrita. Learn about membership benefits, pricing, and how to become part of our technical community.",
    images: [
      {
        url: "/assets/Society.jpg",
        width: 1200,
        height: 630,
        alt: "Join IEEE CS @ Amrita",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join IEEE CS @ Amrita",
    description:
      "Join IEEE Computer Society Student Branch at Amrita. Learn about membership benefits, pricing, and how to become part of our technical community.",
    images: ["/assets/Society.jpg"],
  },
};

export default function JoinPage() {
  return (
    <div>
      <Breadcrumbs segments={[{ label: "Join" }]} />
      <PageHeader
        title="Join IEEE Today"
        description="Become part of the world's largest technical professional organization dedicated to advancing technology for the benefit of humanity."
      >
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="https://www.ieee.org/membership/join/index.html"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cs-white whitespace-nowrap"
          >
            Join IEEE
            <ExternalLink className="h-5 w-5 flex-shrink-0" />
          </a>
          <a
            href="https://www.computer.org/membership"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-cs-white whitespace-nowrap"
          >
            Join Computer Society
            <ExternalLink className="h-5 w-5 flex-shrink-0" />
          </a>
        </div>
      </PageHeader>

      {/* Why Join Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Join IEEE?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              IEEE membership opens doors to career opportunities, technical
              resources, and a global network of professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Benefit Card 1 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Network
              </h3>
              <p className="text-gray-600">
                Connect with over 400,000 members in 160+ countries across the
                globe.
              </p>
            </div>

            {/* Benefit Card 2 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                IEEE Xplore Access
              </h3>
              <p className="text-gray-600">
                Access millions of technical documents, papers, and standards in
                the IEEE Xplore Digital Library.
              </p>
            </div>

            {/* Benefit Card 3 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Career Resources
              </h3>
              <p className="text-gray-600">
                Job board, resume assistance, interview prep, and career
                development tools.
              </p>
            </div>

            {/* Benefit Card 4 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professional Growth
              </h3>
              <p className="text-gray-600">
                Conferences, webinars, workshops, and continuing education
                opportunities.
              </p>
            </div>

            {/* Benefit Card 5 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Recognition & Awards
              </h3>
              <p className="text-gray-600">
                Opportunities for scholarships, grants, and professional
                recognition.
              </p>
            </div>

            {/* Benefit Card 6 */}
            <div className="cs-card p-6 text-center">
              <div className="w-16 h-16 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-[#00629B]" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Chapters
              </h3>
              <p className="text-gray-600">
                Engage with local communities through student branches and
                technical societies.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Comparison */}
      <section className="py-16 bg-warm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Membership Options
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the membership that best fits your goals and interests.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* IEEE Membership */}
            <div className="cs-card p-8 bg-white">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-10 w-10 text-[#00629B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  IEEE Membership
                </h3>
                <p className="text-gray-600">
                  For all technology professionals and students
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Access to IEEE Xplore Digital Library
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Discounts on conferences and publications
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    IEEE Spectrum magazine subscription
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Career development resources
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Networking opportunities worldwide
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Voting rights in IEEE elections
                  </span>
                </div>
              </div>

              <div className="bg-[#e8f0f8] rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    Student Membership
                  </div>
                  <div className="text-3xl font-bold text-[#00629B]">
                    {MEMBERSHIP_PRICES.ieeeStudent}
                  </div>
                  <div className="text-sm text-gray-600">per year</div>
                </div>
              </div>

              <a
                href="https://www.ieee.org/membership/join/index.html"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-primary w-full"
              >
                Join IEEE
                <ExternalLink className="inline ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </div>

            {/* Computer Society Membership */}
            <div className="cs-card p-8 bg-white border-2 border-[#00629B]">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#00629B] text-white text-xs font-semibold px-3 py-1 rounded-full mb-4">
                  RECOMMENDED
                </div>
                <div className="w-20 h-20 bg-[#e8f0f8] rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-10 w-10 text-[#00629B]" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Computer Society
                </h3>
                <p className="text-gray-600">
                  For computing professionals and enthusiasts
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    All IEEE membership benefits included
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Computer Society Digital Library access
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Computing magazines and publications
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Exclusive webinars and technical content
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Special discounts on CS conferences
                  </span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-[#00629B] mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    Professional certifications and training
                  </span>
                </div>
              </div>

              <div className="bg-[#e8f0f8] rounded-lg p-4 mb-6">
                <div className="text-center">
                  <div className="text-sm text-gray-600 mb-1">
                    Student Society Membership
                  </div>
                  <div className="text-3xl font-bold text-[#00629B]">
                    {MEMBERSHIP_PRICES.csStudent}
                  </div>
                  <div className="text-sm text-gray-600">per year</div>
                  <div className="text-xs text-gray-600 mt-2">
                    (Includes IEEE + Computer Society)
                  </div>
                </div>
              </div>

              <a
                href="https://www.computer.org/membership"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-cs-primary w-full"
              >
                Join Computer Society
                <ExternalLink className="inline ml-2 h-5 w-5 flex-shrink-0" />
              </a>
            </div>
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              <strong>Note:</strong> Computer Society membership includes IEEE
              membership. You get the best of both worlds!
            </p>
          </div>
        </div>
      </section>

      {/* Join Our Chapter */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Join Our Student Branch Chapter
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            After becoming an IEEE or Computer Society member, join our local
            student branch chapter to participate in workshops, hackathons,
            seminars, and networking events throughout the year.
          </p>
          <div className="grid md:grid-cols-2 gap-6 mb-8 max-w-lg mx-auto">
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {STATS.eventsYearly}+
              </div>
              <div className="text-gray-600">Events per year</div>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <div className="text-4xl font-bold text-[#00629B] mb-2">
                {STATS.members}+
              </div>
              <div className="text-gray-600">Active members</div>
            </div>
          </div>
          <Link href="/contact" className="btn-cs-secondary">
            Contact Us to Get Started
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-warm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked Questions
          </h2>

          <FAQAccordion />
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-white">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-[#00629B] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white mb-8">
            Join thousands of students worldwide who are advancing their careers
            through IEEE membership.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-cs-white whitespace-nowrap"
            >
              Join IEEE
              <ExternalLink className="h-5 w-5 flex-shrink-0" />
            </a>
            <Link href="/contact" className="btn-cs-white whitespace-nowrap">
              Have Questions? Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
