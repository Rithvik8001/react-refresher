import React from "react";
import { Outlet } from "react-router";

function Settings() {
  return (
    <div>
      <h1>Settings Page</h1>
      <Outlet />
    </div>
  );
}

export default Settings;
