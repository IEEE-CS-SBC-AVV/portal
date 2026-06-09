import { SkeletonPageHeader, SkeletonText } from "@/components/Skeleton";

export default function NewsDetailLoading() {
  return (
    <div className="min-h-screen bg-warm">
      <SkeletonPageHeader />
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="space-y-4">
              <SkeletonText className="h-4 w-32" />
              <SkeletonText className="h-4 w-48" />
              <SkeletonText className="h-10 w-3/4" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-2/3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
