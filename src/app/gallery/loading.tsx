export default function GalleryLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-40 bg-white/20 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-80 bg-white/20 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="py-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-16 h-16 bg-gray-200 rounded-2xl animate-pulse mx-auto mb-6"></div>
          <div className="h-8 w-64 bg-gray-200 rounded animate-pulse mx-auto mb-4"></div>
          <div className="h-4 w-80 bg-gray-100 rounded animate-pulse mx-auto mb-8"></div>
          <div className="h-12 w-40 bg-gray-200 rounded-lg animate-pulse mx-auto"></div>
        </div>
      </div>
      <div className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video bg-gray-200 rounded-xl animate-pulse"
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
