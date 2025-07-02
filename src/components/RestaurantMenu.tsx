import useRestaurantMenu from "../hooks/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { Card, CardContent } from "./ui/card";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resMenu = useRestaurantMenu(resId);

  const { name, costForTwoMessage, cuisines, sla } =
    resMenu?.data?.cards[2]?.card?.card?.info || {};
  const { itemCards } =
    resMenu?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card || {};

  return (
    <>
      {resMenu === null ? (
        <Shimmer />
      ) : (
        <div className="min-h-screen flex flex-col gap-4">
          <h1 className="text-3xl tracking-tighter text-center">{name}</h1>
          <div className="max-w-lg w-full mx-auto backdrop-blur-3xl bg-white shadow-sm bg-opacity-50 rounded-lg p-2">
            <div className="w-full p-2">
              <Card className="flex p-1 bg-white shadow-none border-none rounded-none gap-2 backdrop-blur-3xl">
                <CardContent className="flex justify-between p-0">
                  <div className="flex flex-col">
                    <h2 className="text-md text-black tracking-tighter font-medium">
                      Cuisines
                    </h2>
                    <p className="text-sm text-gray-500">
                      {cuisines?.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-md text-black tracking-tighter font-medium">
                      Cost for Two
                    </h2>
                    <p className="text-sm text-gray-500">{costForTwoMessage}</p>
                  </div>
                  <div className="flex flex-col">
                    <h2 className="text-md text-black tracking-tighter font-medium">
                      Delivery Time
                    </h2>
                    <p className="text-sm text-gray-500">
                      {sla?.deliveryTime} min
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="w-full max-w-lg mx-auto">
            <Card className="flex flex-col gap-2 p-4 border-t border-gray-200 backdrop-blur-3xl shadow-xs bg-opacity-50 rounded-lg bg-white">
              <CardContent>
                <h2 className="text-lg text-black tracking-tighter font-medium">
                  Menu
                </h2>
                <div className="flex flex-col gap-2 mt-2">
                  {itemCards?.map((item) => (
                    <div
                      key={item.card.info.name}
                      className="flex justify-between items-center"
                    >
                      <h2 className="text-md text-black tracking-tighter font-medium ">
                        {item.card.info.name}
                      </h2>
                      <p className="text-sm text-gray-500 ">
                        {item.card.info.price / 100}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default RestaurantMenu;
