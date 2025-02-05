import React, { useState } from "react";

const UseState = ({ data }) => {
  const [restaurants, setRestaurants] = useState(data);

  return (
    <div className="flex flex-col items-center gap-6 p-6 w-full max-w-5xl">
      {/* Card Container */}
      <div className="flex flex-wrap justify-center gap-6 w-full">
        {restaurants.map((restaurant, index) => (
          <div
            key={index}
            className="bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-2xl w-48 h-72 text-center border-[6px] border-neutral-200 flex flex-col items-center justify-center"
          >
            <h2 className="text-2xl font-semibold text-gray-800">
              {restaurant.name}
            </h2>
            <p className="text-gray-500 mt-2">{restaurant.Address}</p>
            <span
              className={`inline-block mt-3 p-2 rounded-lg text-white ${
                restaurant.Rating >= 4 ? "bg-green-500" : "bg-yellow-500"
              }`}
            >
              ⭐ {restaurant.Rating}
            </span>
          </div>
        ))}
      </div>

      {/* Button */}
      <button
        onClick={() => {
          setRestaurants(
            restaurants.filter((restaurant) => restaurant.Rating > 4.0)
          );
        }}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md"
      >
        Show Highly Rated
      </button>
    </div>
  );
};

export default UseState;
