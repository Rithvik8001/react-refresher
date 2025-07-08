import React from "react";
import type { RescardProps, RestaurantData } from "./ResCard";

/**
 * Higher-order component that wraps ResCard with total ratings information
 * This component is used when a restaurant has totalRatingsString data available
 */
export const totalRatingsHigherOrderComponent = (
  ResCard: React.ComponentType<RescardProps>
) => {
  // Return a React component that accepts props
  const TotalRatingsComponent = ({ resData }: { resData: RestaurantData }) => {
    return (
      <div>
        <label htmlFor="text">totalRatings</label>
        <ResCard resData={resData} />
      </div>
    );
  };

  return TotalRatingsComponent;
};
