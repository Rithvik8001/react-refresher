import { Card, CardContent, CardTitle } from "./ui/card";

interface RescardProps {
  resData: any;
}

const ResCard = ({ resData }: RescardProps) => {
  return (
    <>
      <Card className="p-3 sm:p-4 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto hover:shadow-lg transition-shadow duration-300 cursor-pointer backdrop-blur-2xl">
        <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-xl">
          <img
            src="https://github.com/shadcn.png"
            className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
            alt="Restaurant"
          />
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-2xl px-2 py-1 rounded-full text-xs font-semibold text-gray-800">
            ⭐ 4.5
          </div>
        </div>

        <div className="mt-4 space-y-2">
          <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight">
            {resData.name}
          </CardTitle>

          <CardContent className="p-0">
            <div className="flex flex-col space-y-2">
              <div className="flex flex-wrap gap-1">
                <span className="text-xs sm:text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded-full">
                  {resData.cuisines.join(", ")}
                </span>
              </div>

              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>🕒 {resData.sla.slaString} </span>
                <span>🚚 Free delivery</span>
              </div>
            </div>
          </CardContent>
        </div>
      </Card>
    </>
  );
};

export default ResCard;
