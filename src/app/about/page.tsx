import type { Metadata } from "next";
import { Target, Users, Lightbulb, Trophy } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us - IEEE CS SBC AVV",
  description:
    "Learn about IEEE Computer Society Student Branch at Amrita, our mission, vision, core values, and achievements in fostering technical excellence.",
};

export default function AboutPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Learn about our chapter&apos;s history, mission, and commitment to
            advancing technology
          </p>
        </div>
      </section>

      {/* Chapter Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Who We Are</h2>
          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              The IEEE Computer Society Student Branch Committee is a vibrant
              community of students passionate about technology, innovation, and
              professional development. Established in 2025, our chapter has
              grown to become one of the most active student organizations on
              campus.
            </p>
            <p>
              As part of the world&apos;s largest technical professional
              organization, we provide our members with unparalleled
              opportunities to connect with peers, industry leaders, and
              cutting-edge technology. Our activities span workshops, seminars,
              hackathons, technical competitions, and community outreach
              programs.
            </p>
            <p>
              We believe in the power of collaboration and knowledge sharing.
              Our diverse membership includes students from various disciplines,
              all united by a common goal: to advance technology for the benefit
              of humanity.
            </p>
          </div>
        </div>
      </section>

      {/* What is IEEE CS */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What is IEEE Computer Society?
              </h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  The IEEE Computer Society is the world&apos;s premier
                  organization of computing professionals, with over 60,000
                  members worldwide. It is the largest of IEEE&apos;s 39
                  societies.
                </p>
                <p>
                  The Computer Society serves computing professionals by
                  offering:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Technical publications and digital libraries</li>
                  <li>Conferences and professional development courses</li>
                  <li>Standards development activities</li>
                  <li>Networking opportunities</li>
                  <li>Career resources and mentorship programs</li>
                </ul>
              </div>
            </div>
            <div className="cs-card p-8 bg-white">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Quick Facts
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="text-sm font-semibold text-gray-600">
                    Established
                  </dt>
                  <dd className="text-lg text-gray-900">2025</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600">
                    Active Members
                  </dt>
                  <dd className="text-lg text-gray-900">xyz+</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600">
                    Events Per Year
                  </dt>
                  <dd className="text-lg text-gray-900">00+</dd>
                </div>
                <div>
                  <dt className="text-sm font-semibold text-gray-600">
                    Institution
                  </dt>
                  <dd className="text-lg text-gray-900">
                    [Amrita Vishwa Vidyapeetham, Coimbatore Campus]
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="cs-card p-6 text-center">
              <Target className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Excellence
              </h3>
              <p className="text-gray-600">
                Striving for the highest standards in everything we do
              </p>
            </div>
            <div className="cs-card p-6 text-center">
              <Users className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Collaboration
              </h3>
              <p className="text-gray-600">
                Working together to achieve common goals and share knowledge
              </p>
            </div>
            <div className="cs-card p-6 text-center">
              <Lightbulb className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Innovation
              </h3>
              <p className="text-gray-600">
                Embracing creativity and pushing the boundaries of technology
              </p>
            </div>
            <div className="cs-card p-6 text-center">
              <Trophy className="h-12 w-12 text-[#00629B] mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Leadership
              </h3>
              <p className="text-gray-600">
                Developing future leaders in technology and engineering
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-[#00B5E2]/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Join Our Chapter?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🎓 Learning Opportunities
              </h3>
              <p className="text-gray-600">
                Access to workshops, seminars, and technical talks by industry
                experts and researchers
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🤝 Networking
              </h3>
              <p className="text-gray-600">
                Connect with fellow students, alumni, and professionals in your
                field
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                💼 Career Development
              </h3>
              <p className="text-gray-600">
                Resume building, interview preparation, and job placement
                assistance
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🏆 Competitions
              </h3>
              <p className="text-gray-600">
                Participate in hackathons, coding competitions, and technical
                challenges
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                📚 Resources
              </h3>
              <p className="text-gray-600">
                Access to IEEE Xplore digital library with millions of technical
                documents
              </p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                🌍 Global Community
              </h3>
              <p className="text-gray-600">
                Be part of the world&apos;s largest technical professional
                organization
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
