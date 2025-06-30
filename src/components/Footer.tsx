import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-center items-center h-10 bg-gray-100">
      <Link to="/" className="text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Foodie. All rights reserved.
      </Link>
    </div>
  );
};

export default Footer;
