import { BrowserRouter, Route, Routes } from "react-router-dom";
import Users from "./pages/Users";
// import UsersProfile from "./pages/UsersProfile";
import { lazy, Suspense } from "react";

const usersProfile = lazy(() => import("./pages/UsersProfile"));

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading....</h1>}>
          <Routes>
            <Route index Component={Users} />
            <Route path="/usersProfile" Component={usersProfile} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}
