import ResCard from "./ResCard";
import type { RestaurantData } from "./ResCard";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurant from "../hooks/useRestaurants";
import { Search, Star } from "lucide-react";
import { totalRatingsHigherOrderComponent } from "./TotalRatingsHOC";

// Use RestaurantData directly since it already includes the optional totalRatingsString
interface Restaurant {
  info: RestaurantData;
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

  // Create the higher-order component for restaurants with total ratings
  const TotalRatingsResCard = totalRatingsHigherOrderComponent(ResCard);

  return (
    <>
      <div className="flex flex-col space-y-10">
        {/* Search section */}
        <div className="mt-8 sm:mt-12">
          <div className="max-w-4xl mx-auto">
            {/* Search header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-3">
                Discover Amazing Restaurants
              </h1>
              <p className="text-muted-foreground text-base sm:text-lg">
                Find the best food and drinks in your area
              </p>
            </div>

            {/* Search controls */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center items-center px-4 sm:px-6">
              <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  className="pl-10 pr-4 py-3 bg-card/50 border-border/50 text-foreground placeholder:text-muted-foreground backdrop-blur-sm focus:bg-card transition-all duration-300"
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
              </div>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 shadow-lg">
                <Search className="w-4 h-4 mr-2" />
                Search
              </Button>

              <Button
                onClick={filterTopRated}
                variant="outline"
                className="border-border text-foreground hover:bg-accent px-6 py-3 shadow-lg"
              >
                <Star className="w-4 h-4 mr-2" />
                Top Rated
              </Button>
            </div>
          </div>
        </div>

        {/* Restaurant grid */}
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {Array.from({ length: 10 }).map((_, index) => (
                <Shimmer key={index} />
              ))}
            </div>
          ) : (
            <>
              {/* Results header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">
                    {restaurents.length} Restaurants Found
                  </h2>
                  <p className="text-muted-foreground text-sm sm:text-base">
                    Delicious options waiting for you
                  </p>
                </div>
              </div>

              {/* Restaurant cards grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
                {restaurents.map((restaurant: Restaurant) => (
                  <Link
                    to={`/restaurant/${restaurant.info.id}`}
                    key={restaurant.info.id}
                    className="block group"
                  >
                    {/* Conditionally render higher-order component if totalRatingsString exists */}
                    {restaurant.info.totalRatingsString ? (
                      <TotalRatingsResCard resData={restaurant.info} />
                    ) : (
                      <ResCard resData={restaurant.info} />
                    )}
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
