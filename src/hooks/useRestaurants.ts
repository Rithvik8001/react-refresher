import { useEffect, useState } from "react";
import { API_URL } from "../utils/constants";

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

function useRestaurant() {
  const [restaurents, setRestaurents] = useState<Restaurant[]>([]);
  const [input, setInput] = useState<string>("");
  const [isLoading, setIsLoading] = useState(true);

  const filterTopRated = () => {
    const filteredList = restaurents.filter((res: Restaurant) => {
      return res.info.avgRating > 4.3;
    });
    console.log(filteredList);
    setRestaurents(filteredList);
  };

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
  useEffect(() => {
    fetchData();
  }, []);
  return {
    restaurents,
    setRestaurents,
    input,
    setInput,
    isLoading,
    setIsLoading,
    filterTopRated,
  };
}

export default useRestaurant;
