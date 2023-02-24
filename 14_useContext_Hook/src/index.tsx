import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppFunction from "./_01_functional/AppFunction";
import AppClass from "./_02_class/AppClass";

ReactDOM.render(
  <React.StrictMode>
    <AppFunction />
    <hr />
    <AppClass />
  </React.StrictMode>,
  document.getElementById("root"),
);
