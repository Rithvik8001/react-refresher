import { Link } from "react-router-dom";
import UserCard from "../components/UserCard";

export default function Users() {
  return (
    <>
      <div className="min-h-screen flex flex-col">
        <UserCard />
        <Link to="/usersProfile">
          <button className="px-5 py-2 rounded-md border-2 border-gray-400 bg-black text-white">
            Get Users Profile
          </button>
        </Link>
      </div>
    </>
  );
}
