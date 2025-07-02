import ResCard from "./ResCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurants";

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
  const {
    input,
    setInput,
    restaurents,
    setRestaurents,
    isLoading,
    filterTopRated,
  } = useRestaurant();

  return (
    <>
      <div className="flex flex-col space-y-8">
        <div className="mt-8 sm:mt-12">
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 sm:px-6">
            <Input
              className="lg:w-1/2 max-w-md sm:max-w-lg md:max-w-xl"
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
            <Button>Search</Button>
            <Button onClick={filterTopRated}>Top Rated Restaurants</Button>
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
