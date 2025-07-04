import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";
import { lazy, Suspense } from "react";
import Shimmer from "./components/Shimmer";
import Cart from "./components/Cart";

const Grocery = lazy(() => import("./components/Grocery"));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route index element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/restaurant/:resId" element={<RestaurantMenu />} />
            <Route
              path="/groceries"
              element={
                <Suspense fallback={<Shimmer />}>
                  <Grocery />
                </Suspense>
              }
            />
            <Route path="/cart" element={<Cart />} />
          </Route>

          <Route path="*" element={<h1>No Page Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
