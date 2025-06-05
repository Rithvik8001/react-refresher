import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function Discuss() {
  // programmtic dynamic react navigation
  const navigate = useNavigate();
  return (
    <>
      <nav className="mt-12">
        <NavLink
          className={({ isActive }) =>
            `p-3 mr-2 border border-black ${isActive ? "shadow-lg border-2 rounded-md" : ""}`
          }
          to="/discuss/interview-expereince"
        >
          Interview Expereince
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            `p-3 mr-2 border border-black ${isActive ? "shadow-2xl border-2 rounded-md" : ""}`
          }
          to="/discuss/interview-questions"
        >
          Interview Questions
        </NavLink>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="m-4 px-5 rounded-sm py-1 border-2 border-black text-white bg-black"
        >
          Home
        </button>
      </nav>
      <Outlet />
    </>
  );
}
