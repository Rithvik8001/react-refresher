import React from "react";
import { Sandwich } from "lucide-react";

function Navbar() {
  return (
    <div className="border-b border-neutral-200">
      <div className="flex p-4 w-full max-w-4xl mx-auto items-center">
        <div className="flex-1">
          <Sandwich />
        </div>
        <div className="w-full flex-1">
          <ul className="flex items-center justify-between w-full list-none no-underline">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
