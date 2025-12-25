import {
  Users,
  MessageSquare,
  Share2,
  FileText,
  Video,
  Globe,
  CheckCircle,
  ExternalLink,
} from "lucide-react";

export default function CollabratecPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-ieee-blue to-ieee-blue-dark text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              IEEE Collabratec
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Connect. Collaborate. Create. The professional networking platform
              designed exclusively for the global technology community.
            </p>
            <a
              href="https://ieee-collabratec.ieee.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-ieee-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center"
            >
              Visit IEEE Collabratec
              <ExternalLink className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* What is Collabratec */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What is IEEE Collabratec?
            </h2>
            <p className="text-xl text-gray-600">
              IEEE Collabratec is a multifaceted, integrated online community
              where IEEE members connect, collaborate, and create together.
            </p>
          </div>

          <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
            <p>
              IEEE Collabratec is an integrated online community where IEEE
              members can network with peers, discuss technology, create and
              collaborate on projects, and discover new opportunities to advance
              their careers and the profession.
            </p>
            <p>
              Built on the Humanity+ platform, Collabratec leverages the power
              of social networking to bring together the global IEEE community
              in ways never before possible.
            </p>
            <p>
              Whether you&apos;re looking to connect with colleagues, share your
              research, collaborate on projects, or explore career
              opportunities, Collabratec provides the tools and platform to make
              it happen.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Key Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful tools designed to enhance collaboration and professional
              growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Professional Networking
              </h3>
              <p className="text-gray-600">
                Connect with IEEE members worldwide, build your professional
                network, and discover collaboration opportunities.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <MessageSquare className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Communities & Groups
              </h3>
              <p className="text-gray-600">
                Join interest-based communities, participate in discussions, and
                engage with experts in your field.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <Share2 className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Project Collaboration
              </h3>
              <p className="text-gray-600">
                Create and manage collaborative projects, share resources, and
                work together with team members globally.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <FileText className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Content Sharing
              </h3>
              <p className="text-gray-600">
                Share articles, research papers, presentations, and other
                technical content with the community.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <Video className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Events & Webinars
              </h3>
              <p className="text-gray-600">
                Discover and participate in virtual events, webinars, and
                conferences hosted by IEEE communities.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="ieee-card p-6 bg-white">
              <div className="w-14 h-14 bg-ieee-blue-light rounded-lg flex items-center justify-center mb-4">
                <Globe className="h-7 w-7 text-ieee-blue" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Global Reach
              </h3>
              <p className="text-gray-600">
                Access a worldwide network of technology professionals across
                all IEEE technical societies and regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits for Students */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Benefits */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits for Students
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                As a student, IEEE Collabratec provides unique opportunities to
                enhance your academic and professional journey:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ieee-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Connect with Industry Professionals:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Network with experienced engineers and researchers in your
                      field of interest.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ieee-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Find Project Collaborators:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Discover peers working on similar projects and form
                      research teams.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ieee-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Career Guidance:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Get mentorship and advice from professionals who&apos;ve
                      walked the path before you.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ieee-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Share Your Work:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Showcase your projects, research, and achievements to a
                      global audience.
                    </span>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-ieee-blue mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-gray-900">
                      Learn from Experts:
                    </span>
                    <span className="text-gray-700">
                      {" "}
                      Access exclusive content, webinars, and discussions led by
                      industry leaders.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right: CTA Card */}
            <div className="ieee-card p-8 bg-gray-50 text-center">
              <div className="w-32 h-32 mx-auto mb-6 bg-ieee-blue-light rounded-full flex items-center justify-center">
                <Users className="w-16 h-16 text-ieee-blue" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Join?
              </h3>
              <p className="text-gray-700 mb-6">
                IEEE Collabratec is free for all IEEE members. Start connecting
                with the global technology community today.
              </p>
              <a
                href="https://ieee-collabratec.ieee.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ieee-primary w-full block text-center py-3"
              >
                Access Collabratec
                <ExternalLink className="inline ml-2 h-5 w-5" />
              </a>
              <p className="text-sm text-gray-500 mt-4">
                Requires IEEE membership
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Get Started */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Get Started
            </h2>
            <p className="text-xl text-gray-600">
              Join IEEE Collabratec in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-ieee-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Become an IEEE Member
              </h3>
              <p className="text-gray-600">
                If you&apos;re not already an IEEE member, join today to access
                Collabratec and other benefits.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-ieee-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Visit Collabratec
              </h3>
              <p className="text-gray-600">
                Go to ieee-collabratec.ieee.org and sign in with your IEEE
                credentials.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-16 h-16 bg-ieee-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Start Connecting
              </h3>
              <p className="text-gray-600">
                Create your profile, join communities, and begin collaborating
                with members worldwide.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <a
              href="https://www.ieee.org/membership/join/index.html"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ieee-secondary inline-block px-8 py-3"
            >
              Not a member? Join IEEE
            </a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-ieee-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join the Conversation
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Connect with thousands of technology professionals, share ideas, and
            collaborate on projects that shape the future.
          </p>
          <a
            href="https://ieee-collabratec.ieee.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-ieee-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-flex items-center"
          >
            Visit IEEE Collabratec
            <ExternalLink className="ml-2 h-5 w-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
