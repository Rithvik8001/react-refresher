import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Discuss from "./pages/Discuss";
import Contest from "./pages/Contest";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* index - default route */}
          <Route index Component={Home} />
          {/* /Profile Route */}
          <Route path="/Profile" Component={Profile} />

          <Route path="/discuss" Component={Discuss}>
            <Route
              path="interview-expereince"
              element={
                <h1 className="m-12 text-center">Interview Expereince</h1>
              }
            />
            <Route
              path="interview-questions"
              element={
                <h1 className="m-12 text-center">Interview Questions</h1>
              }
            />

            <Route path="*" element={<h1>Invalid Route</h1>} />
          </Route>

          {/* Dynamic Routes / Segments */}
          <Route path="/contest/:contestId" Component={Contest} />

          {/* Wild card Route - *. when no route is matching the path. */}
          <Route
            path="*"
            element={
              <h1 className="text-5xl tracking-tighter text-center p-12">
                Page not Found.
              </h1>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
