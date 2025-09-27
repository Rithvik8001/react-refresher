import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// const h1 = React.createElement(
//   "h1",
//   { id: "title", className: "container" },
//   "Webpack in React."
// );
const element = <h1>Hello JSX!</h1>;
const app = document.getElementById("app");

const root = ReactDOM.createRoot(app);
root.render(element);
