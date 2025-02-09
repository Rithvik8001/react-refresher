import React, { useState } from "react";
import useGetRandomProduct from "../hooks/UsegetRandomProduct";

const RandomProduct = () => {
  const [randomProduct, getRandomProduct] = useGetRandomProduct();
  const [showProduct, setShowProduct] = useState(false);

  const handleButtonClick = () => {
    getRandomProduct();
    setShowProduct(true);
  };

  return (
    <div>
      <button
        className="p-4 border-none rounded-lg bg-red-300"
        onClick={handleButtonClick}
      >
        Get Product
      </button>

      {showProduct && randomProduct && (
        <div>
          <h1>{randomProduct.name}</h1>
          <p>{randomProduct.description}</p>{" "}
          <img src={randomProduct.image_url} alt={randomProduct.name} />{" "}
        </div>
      )}
    </div>
  );
};

export default RandomProduct;
