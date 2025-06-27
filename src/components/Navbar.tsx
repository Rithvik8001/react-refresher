import Logo from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="h-16 border-b border-gray-200 shadow-xs flex items-center justify-between rounded-2xl bg-white px-4 md:px-6">
        {/* Logo Section */}
        <div className="flex items-center">
          <Logo size={44} className="w-10 h-10 md:w-11 md:h-11" />
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex justify-between items-center gap-8 lg:gap-12">
          <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
            Home
          </li>
          <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
            About
          </li>
          <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
            Contact
          </li>
          <li className="text-sm lg:text-base font-medium hover:text-primary transition-colors cursor-pointer">
            Cart
          </li>
        </ul>

        {/* Mobile Menu Button */}
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

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg md:hidden z-50">
            <ul className="flex flex-col py-4 px-6 space-y-4">
              <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                Home
              </li>
              <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                About
              </li>
              <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                Contact
              </li>
              <li className="text-base font-medium hover:text-primary transition-colors cursor-pointer py-2">
                Cart
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
