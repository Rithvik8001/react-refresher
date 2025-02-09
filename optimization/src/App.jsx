import React, { lazy, Suspense } from "react";

// Lazily loading the RandomProduct component
const RandomProduct = lazy(() => import("./components/RandomProduct"));

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <h2 className="text-4xl">Get a Random Product</h2>
      {/* Wrapping the lazy-loaded component in Suspense */}
      <Suspense fallback={<div>Loading...</div>}>
        <RandomProduct />
      </Suspense>
    </div>
  );
};

export default App;
