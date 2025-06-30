import { Card, CardContent, CardTitle } from "./ui/card";

interface RestaurantData {
  id: string;
  name: string;
  avgRating: number;
  cloudinaryImageId: string;
  cuisines: string[];
  sla: {
    slaString: string;
  };
}

interface RescardProps {
  resData: RestaurantData;
}

const ResCard = ({ resData }: RescardProps) => {
  return (
    <>
      <Card className="group overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer rounded-xl">
        {/* Image container */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            src="https://github.com/shadcn.png"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            alt="Restaurant"
          />

          {/* Rating badge */}
          <div className="absolute top-3 right-3 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-lg text-sm font-medium text-gray-800 shadow-sm">
            ⭐ {resData.avgRating}
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <CardTitle className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
            {resData.name}
          </CardTitle>

          <CardContent className="p-0">
            <div className="space-y-3">
              {/* Cuisines */}
              <div className="flex flex-wrap gap-1.5">
                {resData.cuisines
                  .slice(0, 2)
                  .map((cuisine: string, index: number) => (
                    <span
                      key={index}
                      className="text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-md"
                    >
                      {cuisine}
                    </span>
                  ))}
                {resData.cuisines.length > 2 && (
                  <span className="text-xs text-gray-500 bg-gray-50 px-2 py-1 rounded-md">
                    +{resData.cuisines.length - 2}
                  </span>
                )}
              </div>

              {/* Delivery info */}
              <div className="flex items-center justify-between text-sm text-gray-600 pt-2 border-t border-gray-50">
                <span className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  {resData.sla.slaString}
                </span>
                <span className="text-gray-500">Free delivery</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ResCard;
