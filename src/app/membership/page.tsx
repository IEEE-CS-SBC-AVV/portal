import Link from "next/link";
import { Lock, Users, Mail, Calendar, FileText, Shield } from "lucide-react";

export default function MembershipDirectoryPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Lock className="h-16 w-16 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Membership Directory
              </h1>
            </div>
            <p className="text-xl text-white/90">
              Connect with fellow IEEE Computer Society members through our
              secure member directory
            </p>
          </div>
        </div>
      </section>

      {/* Members Only Notice */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-8 mb-12 text-center">
            <Shield className="h-20 w-20 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Members Only Access
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              This directory is exclusively available to active IEEE Computer
              Society members to protect member privacy and ensure secure
              networking.
            </p>
            <p className="text-gray-700">
              Authentication and full member directory features coming in Phase
              2 of our website development.
            </p>
          </div>

          {/* What's in the Directory */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              What&apos;s in the Member Directory?
            </h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8f0f8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Users className="h-6 w-6 text-[#00629B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Member Profiles
                    </h3>
                    <p className="text-gray-700">
                      View detailed profiles of fellow members including their
                      academic background, research interests, and projects.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8f0f8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Mail className="h-6 w-6 text-[#00629B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Contact Information
                    </h3>
                    <p className="text-gray-700">
                      Securely access member contact details for collaboration
                      and networking opportunities.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8f0f8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <FileText className="h-6 w-6 text-[#00629B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Research & Projects
                    </h3>
                    <p className="text-gray-700">
                      Discover ongoing research projects and find potential
                      collaborators for your work.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-[#e8f0f8] rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                    <Calendar className="h-6 w-6 text-[#00629B]" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Activity History
                    </h3>
                    <p className="text-gray-700">
                      See member participation in chapter events, workshops, and
                      activities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Access */}
          <div className="bg-white rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              How to Access the Directory
            </h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Become an IEEE Member
                  </h3>
                  <p className="text-gray-700">
                    First, you need to be an active IEEE or IEEE Computer
                    Society member.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Join Our Chapter
                  </h3>
                  <p className="text-gray-700">
                    Register with our local student branch chapter by contacting
                    us or attending an event.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 bg-[#00629B] text-white rounded-full flex items-center justify-center text-xl font-bold mr-4 flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">
                    Wait for Phase 2 Launch
                  </h3>
                  <p className="text-gray-700">
                    The full member directory with authentication will be
                    available in the next phase of our website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy & Security */}
          <div className="bg-[#e8f0f8] rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
              Privacy & Security
            </h2>
            <p className="text-gray-700 text-center mb-6">
              We take member privacy seriously. The directory will include:
            </p>
            <ul className="space-y-3 max-w-2xl mx-auto">
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-[#00629B] mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Secure authentication required for access
                </span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-[#00629B] mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Privacy controls for member information
                </span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-[#00629B] mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Compliance with IEEE privacy policies
                </span>
              </li>
              <li className="flex items-center">
                <Lock className="h-5 w-5 text-[#00629B] mr-3 flex-shrink-0" />
                <span className="text-gray-700">
                  Members can control what information is visible
                </span>
              </li>
            </ul>
          </div>

          {/* CTA Buttons */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get Started Today
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/join"
                className="btn-cs-primary px-8 py-4 inline-block"
              >
                Join IEEE Today
              </Link>
              <Link
                href="/contact"
                className="btn-cs-secondary px-8 py-4 inline-block"
              >
                Contact Us for More Info
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-[#00629B] text-white px-6 py-2 rounded-full text-sm font-semibold mb-4">
            COMING IN PHASE 2
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Full Member Directory Features
          </h3>
          <p className="text-gray-700 mb-6">
            We&apos;re working on building a comprehensive member directory with
            authentication, advanced search, and privacy controls. Stay tuned
            for updates!
          </p>
          <p className="text-sm text-gray-500">Expected launch: Q2 2025</p>
        </div>
      </section>
    </div>
  );
}
