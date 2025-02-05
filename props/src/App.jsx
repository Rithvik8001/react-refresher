import React from "react";
import Navbar from "./components/navbar";
import RestaurentCard from "./components/RestaurentCard";

function App() {
  const resData = [
    { name: "KFC", address: "KT Road Tirupati" },
    { name: "DI Table 9", address: "Tilak Road Tirupati" },
  ];
  return (
    <>
      <Navbar />
      <div className="flex flex-col w-full max-w-5xl mx-auto mt-24 p-6 flex-wrap">
        <h1>Top res ti </h1>
        <div className="flex">
          {resData.map((res) => {
            return <RestaurentCard resData={res} />;
          })}
        </div>
      </div>
    </>
  );
}

export default App;
