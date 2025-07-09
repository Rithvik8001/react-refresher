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
      imageId?: string;
      defaultPrice?: number;
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

  // Debug: Log all cards to understand the structure
  console.log("All cards:", resMenu?.data?.cards);

  // Extract restaurant info from the correct card index
  // Try different indices to find the restaurant info card
  const restaurantInfoCard = resMenu?.data?.cards?.find(
    (card) => card.card?.card?.info?.name,
  );

  // Also try the original index that was working before
  const originalRestaurantInfo = resMenu?.data?.cards[2]?.card?.card?.info;

  const { name, costForTwoMessage, cuisines, sla } =
    restaurantInfoCard?.card?.card?.info ||
    originalRestaurantInfo ||
    resMenu?.data?.cards[0]?.card?.card?.info ||
    {};

  console.log("Restaurant info found:", {
    name,
    costForTwoMessage,
    cuisines,
    sla,
  });

  // Extract menu items from the grouped card structure
  const menuItems =
    resMenu?.data?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR?.cards)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.flatMap(
        (card) => card.card?.card?.itemCards || [],
      ) || [];

  console.log("Menu items extracted:", menuItems);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Shimmer />
      </div>
    );
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
      <div className="min-h-screen flex flex-col gap-6 p-4">
        {/* Restaurant Header */}
        <div className="max-w-4xl mx-auto w-full">
          <h1 className="text-3xl tracking-tighter text-center text-foreground mb-6">
            {name || "Restaurant Menu"}
          </h1>

          {/* Restaurant Info Card */}
          <Card className="flex flex-col md:flex-row justify-between items-center p-4 bg-card shadow-lg backdrop-blur-sm border border-border rounded-lg mb-6 gap-4">
            <div className="flex flex-col gap-2 w-full md:w-2/3">
              <h2 className="text-lg text-card-foreground tracking-tighter font-medium mb-1">
                Cuisines
              </h2>
              <div className="flex flex-wrap gap-2">
                {cuisines && cuisines.length > 0 ? (
                  cuisines.map((cuisine, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full border border-border/30 hover:bg-muted transition-colors duration-200"
                    >
                      {cuisine}
                    </span>
                  ))
                ) : (
                  <span className="text-sm text-muted-foreground">
                    Cuisine information not available
                  </span>
                )}
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-1/3 items-end">
              <div className="flex flex-col bg-accent justify-center items-center h-12 w-32 rounded-lg p-2 gap-1 mb-2">
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

          {/* Menu Items Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">
              Menu Items
            </h2>

            {menuItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {menuItems.map((item, index) => (
                  <Card
                    key={index}
                    className="p-4 bg-card/50 backdrop-blur-sm border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer rounded-lg hover:scale-[1.02]"
                  >
                    <div className="space-y-3">
                      {/* Item Name */}
                      <h3 className="text-lg font-semibold text-card-foreground line-clamp-2">
                        {item.card.info.name}
                      </h3>

                      {/* Item Description */}
                      {item.card.info.description && (
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {item.card.info.description}
                        </p>
                      )}

                      {/* Item Price */}
                      <div className="flex justify-between items-center pt-2 border-t border-border/30">
                        <span className="text-lg font-bold text-primary">
                          ₹
                          {item.card.info.price / 100 ||
                            (item.card.info.defaultPrice
                              ? item.card.info.defaultPrice / 100
                              : null) ||
                            "Price not available"}
                        </span>
                        <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium">
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  No Menu Items Available
                </h3>
                <p className="text-muted-foreground">
                  This restaurant doesn't have any menu items listed at the
                  moment.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
