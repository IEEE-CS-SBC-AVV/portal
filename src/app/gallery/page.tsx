export default function GalleryPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Event Gallery</h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Explore photos and memories from our chapter&apos;s events,
            workshops, and activities.
          </p>
        </div>
      </section>

      {/* Coming Soon Message */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg shadow-md p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Gallery Coming Soon
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re curating our best event photos and memories to share
              with you. Check back soon for an amazing visual journey through
              our chapter&apos;s activities!
            </p>
            <p className="text-gray-600">
              In the meantime, follow us on social media for the latest updates
              and event photos.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <a
                href="https://www.linkedin.com/company/computer-society-avv"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block text-center no-underline"
              >
                Follow on LinkedIn
              </a>
              <a
                href="https://www.instagram.com/cs_asai_cbe"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#00629B] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition inline-block text-center no-underline"
              >
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
