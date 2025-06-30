import ResCard from "./ResCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { API_URL } from "../utils/constants";
import { Link } from "react-router-dom";

interface RestaurantInfo {
  id: string;
  name: string;
  avgRating: number;
  cloudinaryImageId: string;
  cuisines: string[];
  sla: {
    slaString: string;
  };
}

interface Restaurant {
  info: RestaurantInfo;
}

const Header = () => {
  const [restaurents, setRestaurents] = useState<Restaurant[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState<string>("");

  const filterTopRated = () => {
    const filteredList = restaurents.filter((res: Restaurant) => {
      return res.info.avgRating > 4.3;
    });
    console.log(filteredList);
    setRestaurents(filteredList);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(API_URL);
      const apiData = await response.json();
      const apiRestaurants =
        apiData.data?.cards[1]?.card.card.gridElements?.infoWithStyle
          ?.restaurants;

      if (apiRestaurants && apiRestaurants.length > 0) {
        setRestaurents(apiRestaurants);
      } else {
        setRestaurents([]);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setRestaurents([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 sm:px-6">
            <Input
              className="lg:w-1/2 max-w-md sm:max-w-lg md:max-w-xl bg-white border-gray-300 focus:border-primary focus:ring-black placeholder:text-xs placeholder:text-center text-black"
              placeholder="Search for restaurants, cuisines, or dishes..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                const searchRes = restaurents.filter((res) => {
                  return res.info.name
                    .toLowerCase()
                    .includes(input.toLowerCase());
                });
                setRestaurents(searchRes);
              }}
            />
            <Button
              variant="outline"
              className=" sm:w-auto px-8 py-2 border-gray-300 hover:bg-primary hover:text-white transition-colors"
            >
              Search
            </Button>
            <Button
              onClick={filterTopRated}
              className="py-5 px-3 text-sm font-light cursor-pointer"
            >
              Top Rated Restaurants
            </Button>
          </div>
        </div>

        <div className="w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {Array.from({ length: 10 }).map((_, index) => (
                <Shimmer key={index} />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 sm:gap-6 lg:gap-8">
              {restaurents.map((restaurant: Restaurant) => (
                <Link
                  to={`/restaurant/${restaurant.info.id}`}
                  key={restaurant.info.id}
                  className="block"
                >
                  <ResCard resData={restaurant.info} />
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
