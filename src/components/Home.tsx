import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <div className="bg-background flex flex-col min-h-screen">
        <div className="m-4 sm:m-6 lg:m-8 space-y-6 sm:space-y-8">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
