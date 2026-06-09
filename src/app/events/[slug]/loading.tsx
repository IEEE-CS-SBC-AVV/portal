import { SkeletonPageHeader, SkeletonText } from "@/components/Skeleton";

export default function EventDetailLoading() {
  return (
    <div className="min-h-screen bg-warm">
      <SkeletonPageHeader />
      <div className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex justify-between items-start mb-6">
              <div className="space-y-2">
                <SkeletonText className="h-4 w-20" />
                <SkeletonText className="h-8 w-96" />
              </div>
              <SkeletonText className="h-6 w-24" />
            </div>
            <div className="space-y-4">
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-full" />
              <SkeletonText className="h-4 w-3/4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
