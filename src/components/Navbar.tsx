/* eslint-disable @typescript-eslint/no-unused-expressions */
import Logo from "./Logo";
import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [authStatus, setAuthStatus] = useState<string>("Login");
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const { status } = useOnlineStatus();

  return (
    <nav className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        {/* Logo and brand */}
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-2 group">
            <Logo
              size={40}
              className="drop-shadow-md transition-transform group-hover:scale-105"
            />
            <span className="text-xl font-extrabold tracking-tight text-primary-foreground group-hover:text-primary transition-colors duration-200 select-none">
              Duno
            </span>
          </Link>
        </div>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-10">
          <Link to="/">
            <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Home
            </li>
          </Link>
          <Link to="/about">
            <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              About
            </li>
          </Link>
          <Link to="/contact">
            <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Contact
            </li>
          </Link>
          <Link to="/groceries">
            <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Groceries
            </li>
          </Link>
          <Link to="/cart">
            <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
              Cart
            </li>
          </Link>
        </ul>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-3">
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
          <Button
            variant="outline"
            size="icon"
            onClick={toggleDarkMode}
            className="cursor-pointer"
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </Button>
          <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground font-medium">
            {status ? "🟢 Online" : "🔴 Offline"}
          </span>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 border-b border-border shadow-lg">
          <ul className="flex flex-col py-4 px-6 space-y-2">
            <Link to="/">
              <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2">
                Home
              </li>
            </Link>
            <Link to="/about">
              <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2">
                About
              </li>
            </Link>
            <Link to="/contact">
              <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2">
                Contact
              </li>
            </Link>
            <Link to="/cart">
              <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2">
                Cart
              </li>
            </Link>
            <Link to="/groceries">
              <li className="text-base font-medium text-foreground hover:text-primary transition-colors cursor-pointer py-2">
                Groceries
              </li>
            </Link>
            <Button
              className="cursor-pointer w-full"
              variant="outline"
              onClick={() => {
                authStatus === "Login"
                  ? setAuthStatus("Logout")
                  : setAuthStatus("Login");
              }}
            >
              {authStatus}
            </Button>
            <Button
              variant="outline"
              onClick={toggleDarkMode}
              className="cursor-pointer flex items-center gap-2 w-full"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
              {isDarkMode ? "Light Mode" : "Dark Mode"}
            </Button>
            <span className="text-xs px-2 py-1 rounded bg-accent text-accent-foreground font-medium w-fit">
              {status ? "🟢 Online" : "🔴 Offline"}
            </span>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
