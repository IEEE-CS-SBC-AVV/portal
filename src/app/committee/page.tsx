import type { Metadata } from "next";
import { Mail, Linkedin, Phone, User } from "lucide-react";
import committeeData from "./members.json";

export const metadata: Metadata = {
  title: "Committee - IEEE CS SBC AVV",
  description:
    "Meet the leadership and committee members of IEEE Computer Society Student Branch at Amrita - faculty advisors and student officers.",
};

interface MemberCardProps {
  name: string;
  role?: string;
  department: string;
  year?: string;
  email: string | null;
  linkedin?: string;
  phone?: string;
  bio: string;
  designation?: string;
}

function MemberCard({
  name,
  role,
  department,
  year,
  email,
  linkedin,
  phone,
  bio,
  designation,
}: MemberCardProps) {
  return (
    <div className="ieee-card p-6 h-full flex flex-col">
      {/* Placeholder Avatar */}
      <div className="w-32 h-32 mx-auto mb-4 bg-ieee-blue-light rounded-full flex items-center justify-center">
        <User className="w-16 h-16 text-ieee-blue" />
      </div>

      {/* Member Info */}
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-ieee-blue font-semibold mb-2">
          {designation || role}
        </p>
        <p className="text-sm text-gray-600">
          {department}
          {year && ` • ${year}`}
        </p>
      </div>

      {/* Bio */}
      <p className="text-gray-600 text-sm mb-4 flex-grow">{bio}</p>

      {/* Contact Links */}
      <div className="flex justify-center space-x-3 pt-4 border-t border-gray-200">
        {email && (
          <a
            href={`mailto:${email}`}
            className="text-gray-600 hover:text-ieee-blue transition"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-ieee-blue transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        )}
        {phone && (
          <a
            href={`tel:${phone}`}
            className="text-gray-600 hover:text-ieee-blue transition"
            aria-label="Phone"
          >
            <Phone className="w-5 h-5" />
          </a>
        )}
      </div>
    </div>
  );
}

export default function CommitteePage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-gradient-to-r from-ieee-blue to-ieee-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Committee</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
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

      {/* Technical Team */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Executive Core Committee
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.technical.map((member, index) => (
              <MemberCard key={index} {...member} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.publicity.map((member, index) => (
              <MemberCard key={index} {...member} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.design.map((member, index) => (
              <MemberCard key={index} {...member} />
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {committeeData.newsletter.map((member, index) => (
              <MemberCard key={index} {...member} />
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
          <div className="max-w-md mx-auto">
            <MemberCard {...committeeData.webmaster} />
          </div>
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="py-16 bg-ieee-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Interested in Joining Our Team?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            We&apos;re always looking for passionate students to join our
            committee and help drive our chapter forward.
          </p>
          <a
            href="/contact"
            className="bg-white text-ieee-blue px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
