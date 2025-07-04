import { useEffect, useState } from "react";

interface ItemCard {
  card: {
    info: {
      name: string;
      price: number;
      description?: string;
    };
  };
}

interface MenuData {
  data: {
    cards: Array<{
      card: {
        card: {
          info?: {
            name: string;
            costForTwoMessage: string;
            cuisines: string[];
            avgRating: string;
            sla: {
              deliveryTime: string;
            };
          };
        };
      };
      groupedCard?: {
        cardGroupMap: {
          REGULAR: {
            cards: Array<{
              card: {
                card: {
                  itemCards?: ItemCard[];
                };
              };
            }>;
          };
        };
      };
    }>;
  };
}

function useRestaurantMenu(resId: string | undefined) {
  const [resMenu, setResMenu] = useState<MenuData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (resId) {
      console.log("Fetching menu for resId:", resId);
      fetchMenu();
    }
  }, [resId]);

  const fetchMenu = async () => {
    try {
      setIsLoading(true);
      console.log("Making API call for resId:", resId);
      const response = await fetch(
        `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`
      );
      const data = await response.json();
      console.log("API Response:", data);
      setResMenu(data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return { resMenu, isLoading };
}

export default useRestaurantMenu;
