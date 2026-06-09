export function SkeletonText({
  className = "",
  lines = 1,
}: {
  className?: string;
  lines?: number;
}) {
  if (lines === 1) {
    return (
      <div className={`h-4 bg-gray-200 rounded animate-pulse ${className}`} />
    );
  }
  return (
    <div className="space-y-2">
      {Array.from({ length: lines }, (_, i) => (
        <div
          key={i}
          className={`h-4 bg-gray-200 rounded animate-pulse ${i === lines - 1 ? "w-3/4" : "w-full"} ${className}`}
        />
      ))}
    </div>
  );
}

export function SkeletonPageHeader() {
  return (
    <div className="bg-gradient-to-r from-[#00629B] to-[#002855] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-10 w-48 bg-white/20 rounded animate-pulse mb-3" />
        <div className="h-5 w-96 bg-white/20 rounded animate-pulse" />
      </div>
    </div>
  );
}
