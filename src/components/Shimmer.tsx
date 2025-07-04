const Shimmer = () => {
  return (
    <>
      <div className="group overflow-hidden bg-card border border-border shadow-sm rounded-xl animate-pulse">
        {/* Image container */}
        <div className="relative w-full h-48 overflow-hidden">
          <div className="w-full h-full bg-muted animate-pulse"></div>
        </div>

        {/* Content */}
        <div className="p-5">
          <div className="space-y-3">
            {/* Title */}
            <div className="h-6 bg-muted rounded animate-pulse"></div>

            {/* Cuisines */}
            <div className="flex flex-wrap gap-1.5">
              <div className="h-5 w-16 bg-muted rounded animate-pulse"></div>
              <div className="h-5 w-20 bg-muted rounded animate-pulse"></div>
            </div>

            {/* Delivery info */}
            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="h-4 w-24 bg-muted rounded animate-pulse"></div>
              <div className="h-4 w-20 bg-muted rounded animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shimmer;
