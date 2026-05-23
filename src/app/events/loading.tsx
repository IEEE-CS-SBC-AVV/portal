export default function EventsLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-48 bg-white/20 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-white/20 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-4">
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
            <div className="h-10 w-32 bg-gray-200 rounded-lg animate-pulse"></div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="h-4 w-20 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-6 w-full bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-4 w-40 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-32 bg-gray-200 rounded animate-pulse mb-2"></div>
                <div className="h-4 w-48 bg-gray-200 rounded animate-pulse mb-4"></div>
                <div className="h-16 w-full bg-gray-100 rounded animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section Skeleton */}
      <div className="py-16 bg-[#00629B]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="h-8 w-72 bg-white/20 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-5 w-96 bg-white/20 rounded animate-pulse mx-auto mb-8"></div>
          <div className="h-12 w-40 bg-white/20 rounded-lg animate-pulse mx-auto"></div>
        </div>
      </div>
    </div>
  );
}
