import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <div className="bg-gray-50 flex flex-col">
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
