import React from "react";
import UseState from "./components/UseState";

const data = [
  { name: "KFC", Rating: 4.4, Address: "Tpt" },
  { name: "MCD", Rating: 4.1, Address: "Tpt" },
  { name: "Dominos", Rating: 3.4, Address: "Tpt" },
  { name: "Baskin", Rating: 3.8, Address: "Tpt" },
];

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <UseState data={data} />
    </div>
  );
}

export default App;
