import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppFunctional from "./_01_functional/AppFunctional";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);
root.render(
  <React.StrictMode>
    <AppFunctional />
  </React.StrictMode>,
);
