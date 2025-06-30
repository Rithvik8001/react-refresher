import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Header from "./components/Header";
import RestaurantMenu from "./components/RestaurantMenu";

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
          </Route>
          <Route path="*" element={<h1>No Page Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
