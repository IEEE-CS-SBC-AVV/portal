import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to IEEE CS SBC
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            Empowering students through technology and innovation
          </p>
          <Link 
            href="/join"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
          >
            Join Us
          </Link>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Events Card */}
          <Link href="/events" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📅</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600">
                Events
              </h3>
              <p className="text-gray-600">
                Workshops, seminars, and competitions to enhance your skills
              </p>
            </div>
          </Link>

          {/* Projects Card */}
          <Link href="/projects" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600">
                Projects
              </h3>
              <p className="text-gray-600">
                Collaborative projects and innovative solutions
              </p>
            </div>
          </Link>

          {/* Resources Card */}
          <Link href="/resources" className="group">
            <div className="border rounded-lg p-6 hover:shadow-lg transition">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-2xl font-bold mb-2 group-hover:text-blue-600">
                Resources
              </h3>
              <p className="text-gray-600">
                Learning materials and helpful guides
              </p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}