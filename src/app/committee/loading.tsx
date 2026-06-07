export default function CommitteeLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-56 bg-white/20 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-80 bg-white/20 rounded animate-pulse"></div>
        </div>
      </div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-48 bg-gray-200 rounded animate-pulse mx-auto mb-8"></div>
          <div className="max-w-md mx-auto">
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
              <div className="h-6 w-40 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
              <div className="h-4 w-56 bg-gray-200 rounded animate-pulse mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-12"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-6 shadow-sm text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                <div className="h-4 w-24 bg-gray-100 rounded animate-pulse mx-auto mb-2"></div>
                <div className="h-4 w-20 bg-gray-100 rounded animate-pulse mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
