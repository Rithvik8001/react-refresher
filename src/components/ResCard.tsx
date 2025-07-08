import { Card, CardContent, CardTitle } from "./ui/card";

export interface RestaurantData {
  id: string;
  name: string;
  avgRating: number;
  cloudinaryImageId: string;
  cuisines: string[];
  sla: {
    slaString: string;
  };
  totalRatingsString?: string; // Optional field for restaurants that have total ratings
}

export interface RescardProps {
  resData: RestaurantData;
}

const ResCard = ({ resData }: RescardProps) => {
  return (
    <>
      <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 cursor-pointer rounded-2xl hover:scale-[1.02] hover:border-border">
        {/* Image container with aspect ratio */}
        <div className="relative w-full aspect-[4/3] overflow-hidden">
          <img
            src="https://github.com/shadcn.png"
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            alt="Restaurant"
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

          {/* Rating badge with glass effect */}
          <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-md px-2.5 py-1 rounded-full text-sm font-semibold text-card-foreground shadow-lg border border-border/30">
            <span className="flex items-center gap-1">
              <span className="text-yellow-400">⭐</span>
              {resData.avgRating}
            </span>
          </div>

          {/* Quick delivery badge */}
          <div className="absolute top-3 left-3 bg-green-500/90 backdrop-blur-md px-2 py-1 rounded-full text-xs font-medium text-white shadow-lg">
            Fast
          </div>
        </div>

        {/* Content with natural flow */}
        <div className="p-4">
          <CardTitle className="text-lg font-bold text-card-foreground mb-2 leading-tight group-hover:text-primary transition-colors duration-300 line-clamp-2">
            {resData.name}
          </CardTitle>

          <CardContent className="p-0">
            <div className="space-y-3">
              {/* Cuisines with improved styling */}
              <div className="flex flex-wrap gap-1.5">
                {resData.cuisines
                  .slice(0, 2)
                  .map((cuisine: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full border border-border/30 hover:bg-muted transition-colors duration-200"
                    >
                      {cuisine}
                    </span>
                  ))}
                {resData.cuisines.length > 2 && (
                  <span className="text-xs font-medium text-muted-foreground bg-muted/50 px-2 py-1 rounded-full border border-border/30">
                    +{resData.cuisines.length - 2}
                  </span>
                )}
              </div>

              {/* Delivery info with enhanced design */}
              <div className="flex items-center justify-between pt-2 border-t border-border/30">
                <div className="flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {resData.sla.slaString}
                  </span>
                </div>
                <span className="text-xs text-muted-foreground bg-accent/50 px-2 py-1 rounded-full">
                  Free delivery
                </span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ResCard;
