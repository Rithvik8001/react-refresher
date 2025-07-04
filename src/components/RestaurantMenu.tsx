import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { Card } from "./ui/card";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

// Define the interface for the menu data structure
interface ItemCard {
  card: {
    info: {
      name: string;
      price: number;
      description?: string;
    };
  };
}

export interface MenuData {
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

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { resMenu, isLoading } = useRestaurantMenu(resId);

  console.log("RestaurantMenu - resId:", resId);
  console.log("RestaurantMenu - resMenu:", resMenu);
  console.log("RestaurantMenu - isLoading:", isLoading);

  const { name, costForTwoMessage, cuisines, sla } =
    resMenu?.data?.cards[2]?.card?.card?.info || {};

  if (isLoading) {
    return <Shimmer />;
  }

  if (!resMenu) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">
            Restaurant Not Found
          </h1>
          <p className="text-muted-foreground">
            Unable to load restaurant menu.
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen flex flex-col gap-4">
        <h1 className="text-3xl tracking-tighter text-center text-foreground">
          {name || "Restaurant Menu"}
        </h1>
        <div className="max-w-lg w-full mx-auto bg-card shadow-xs backdrop-blur-3xl border-2 border-border rounded-lg p-3">
          <Card className="flex justify-between p-3 bg-card shadow-none border-none rounded-none gap-4">
            <div className="flex flex-col gap-1">
              <h2 className="text-lg text-card-foreground tracking-tighter font-medium">
                Cuisines
              </h2>
              <p className="text-sm text-muted-foreground">
                {cuisines?.join(", ") || "Cuisine information not available"}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-col bg-accent justify-center items-center h-12 w-32 rounded-lg p-2 gap-1">
                <p className="text-sm text-accent-foreground font-semibold text-center">
                  {costForTwoMessage || "Cost not available"}
                </p>
              </div>
              <div className="flex flex-col bg-accent justify-center items-center h-12 w-32 rounded-lg p-2 gap-1">
                <p className="text-xs text-accent-foreground">
                  {sla?.deliveryTime
                    ? `${sla.deliveryTime} min`
                    : "Delivery time not available"}
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
