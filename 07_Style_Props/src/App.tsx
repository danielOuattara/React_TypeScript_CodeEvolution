import React from "react";
import "./App.css";
import { Container } from "./components/Container";

function App() {
  const style_container = {
    border: "2px solid grey",
    padding: "2rem",
    margin: "2rem",
    color: "blue",
    fontSize: "2em",
    borderLeft: "10px solid red",
  };

  return (
    <div className="App">
      <Container
        styles={{ border: "5px solid green", padding: "2rem", margin: "2rem" }}
      />
      <Container styles={style_container} />
    </div>
  );
}

export default App;
