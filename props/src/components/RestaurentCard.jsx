import React from "react";

function RestaurentCard({ resData }) {
  return (
    <div className="w-[250px] h-[300px] bg-green-300 ml-3 mb-4 rounded-lg p-2">
      <div className="w-full h-[50%] bg-red-200 rounded-lg"></div>
      <div className="text-center pt-2">
        <h1 className="text-xl font-bold">{resData.name}</h1>
        <h4>{resData.address}</h4>
      </div>
    </div>
  );
}

export default RestaurentCard;
