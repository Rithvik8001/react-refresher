import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="h-16 border-b border-gray-200 flex">
      <div className="p-2 flex grow">
        <ul className="flex items-center justify-evenly grow text-gray-400 tracking-tight">
          <Link to="/">Home</Link>
          <NavLink
            className={({ isActive }) => {
              return isActive ? "border-b-2 border-black" : "";
            }}
            to={{
              pathname: "/profile",
              hash: "#test",
              search: "currentPage=1&orderBy=hot",
            }}
          >
            Profile
          </NavLink>
          <Link to="/discuss">Discuss</Link>
        </ul>
      </div>
    </nav>
  );
}
