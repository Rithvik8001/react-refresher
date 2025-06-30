import { Skeleton } from "./ui/skeleton";

const Shimmer = () => {
  return (
    <div className="bg-white border border-gray-100 shadow-2xl rounded-2xl overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="w-full h-48" />

      {/* Content skeleton */}
      <div className="p-5 space-y-3">
        {/* Title skeleton */}
        <Skeleton className="h-6 w-3/4" />

        {/* Cuisines skeleton */}
        <div className="flex gap-1.5">
          <Skeleton className="h-5 w-16" />
          <Skeleton className="h-5 w-20" />
          <Skeleton className="h-5 w-12" />
        </div>

        {/* Delivery info skeleton */}
        <div className="flex items-center justify-between pt-2 border-t border-gray-50">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-24" />
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
