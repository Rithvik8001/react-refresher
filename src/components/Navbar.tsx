/* eslint-disable @typescript-eslint/no-unused-expressions */
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authStatus, setAuthStatus] = useState<string>("Login");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const { status } = useOnlineStatus();

  return (
    <>
      <div className="h-16 shadow-xs flex items-center justify-between rounded-2xl bg-white px-4 md:px-6">
        <div className="flex items-center">
          <Link to="/">
            <Logo size={44} className="w-10 h-10 md:w-11 md:h-11" />
          </Link>
        </div>

        <ul className="hidden md:flex justify-between items-center gap-8 lg:gap-12">
          <Link to="/">
            <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
              Contact
            </li>
          </Link>
          <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
            Cart
          </li>
          <Button
            className="cursor-pointer"
            variant="outline"
            onClick={() => {
              authStatus === "Login"
                ? setAuthStatus("Logout")
                : setAuthStatus("Login");
            }}
          >
            {authStatus}
          </Button>
          <Button>User is {status ? "🟢 Online" : "🔴 Offline"}</Button>
        </ul>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
            <ul className="flex flex-col py-4 px-6 space-y-4">
              <Link to="/">
                <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                  Home
                </li>
              </Link>
              <Link to="/about">
                <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                  About
                </li>
              </Link>
              <Link to="/contact">
                <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                  Contact
                </li>
              </Link>
              <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                Cart
              </li>
              <Button
                className="cursor-pointer"
                variant="outline"
                onClick={() => {
                  authStatus === "Login"
                    ? setAuthStatus("Logout")
                    : setAuthStatus("Login");
                }}
              >
                {authStatus}
              </Button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
