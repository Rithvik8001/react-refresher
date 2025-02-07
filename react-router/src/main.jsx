import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";
import About from "./components/About";
import Settings from "./components/Settings";
import General from "./components/General";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<About />} />
      <Route path="/settings" element={<Settings />}>
        <Route path="/general" element={<General />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
