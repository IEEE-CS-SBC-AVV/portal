export default function ScopeMembersLoading() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-12 w-64 bg-white/20 rounded animate-pulse mb-4"></div>
          <div className="h-6 w-96 bg-white/20 rounded animate-pulse"></div>
        </div>
      </div>
      <div className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="h-11 flex-1 bg-gray-100 rounded-lg animate-pulse"></div>
            <div className="flex gap-4">
              <div className="h-11 w-40 bg-gray-100 rounded-lg animate-pulse"></div>
              <div className="h-11 w-40 bg-gray-100 rounded-lg animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-16 h-16 bg-gray-200 rounded-full animate-pulse mx-auto mb-4"></div>
                <div className="h-5 w-32 bg-gray-200 rounded animate-pulse mx-auto mb-2"></div>
                <div className="h-4 w-24 bg-gray-100 rounded animate-pulse mx-auto mb-1"></div>
                <div className="h-4 w-20 bg-gray-100 rounded animate-pulse mx-auto"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
