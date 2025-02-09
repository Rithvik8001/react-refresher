import React, { useState } from "react";

const useGetRandomProduct = () => {
  const [randomProduct, setRandomProduct] = useState(null);

  const getRandomProduct = async () => {
    const url = "https://api.freeapi.app/api/v1/public/books/book/random";
    const response = await fetch(url); // Fetch the data
    const data = await response.json(); // Parse it as JSON
    setRandomProduct(data); // Set the fetched product to state
  };

  return [randomProduct, getRandomProduct]; // Return product and fetch function
};

export default useGetRandomProduct;
