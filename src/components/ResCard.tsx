import { Card, CardContent, CardTitle } from "./ui/card";

interface RestaurantData {
  id: string;
  name: string;
  avgRating: number;
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
      <Card className="group relative overflow-hidden bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer rounded-3xl">
        {/* Glassmorphism background layer */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-white/10 to-white/5 rounded-3xl"></div>

        {/* Subtle border glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/30 via-purple-400/30 to-pink-400/30 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Image container with glassmorphism overlay */}
          <div className="relative w-full h-56 overflow-hidden rounded-t-3xl">
            <img
              src="https://github.com/shadcn.png"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
              alt="Restaurant"
            />

            {/* Glassmorphism overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Rating badge with enhanced glassmorphism */}
            <div className="absolute top-4 right-4 bg-white/25 backdrop-blur-xl border border-white/40 px-3 py-1.5 rounded-full text-sm font-semibold text-white shadow-lg">
              ⭐ {resData.avgRating}
            </div>
          </div>

          <div className="p-6 space-y-4">
            <CardTitle className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors duration-300 leading-tight">
              {resData.name}
            </CardTitle>

            <CardContent className="p-0">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {resData.cuisines
                    .slice(0, 3)
                    .map((cuisine: string, index: number) => (
                      <span
                        key={index}
                        className="text-xs font-medium text-gray-700 bg-white/40 backdrop-blur-sm border border-white/30 px-3 py-1.5 rounded-full hover:bg-white/60 hover:border-white/50 transition-all duration-300"
                      >
                        {cuisine}
                      </span>
                    ))}
                  {resData.cuisines.length > 3 && (
                    <span className="text-xs font-medium text-gray-600 bg-white/30 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                      +{resData.cuisines.length - 3} more
                    </span>
                  )}
                </div>

                {/* Delivery info with glassmorphism styling */}
                <div className="flex items-center justify-between pt-3 border-t border-white/20">
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg"></div>
                    <span className="font-medium">{resData.sla.slaString}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-400 rounded-full shadow-lg"></div>
                    <span className="font-medium">Free delivery</span>
                  </div>
                </div>

                {/* Glassmorphism action button */}
                <div className="pt-3">
                  <div className="w-full bg-white/20 backdrop-blur-xl border border-white/30 text-gray-800 text-center py-3 rounded-2xl font-medium text-sm opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:shadow-white/20">
                    View Menu
                  </div>
                </div>
              </div>
            </CardContent>
          </div>
        </div>

        {/* Additional glassmorphism layer for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
      </Card>
    </>
  );
};

export default ResCard;
