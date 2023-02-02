import React from "react";
import { Greet, Greet2 } from "./components/Greet";
import { GreetClass } from "./components/GreetClass";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello React TypeScript</h1>
      <Greet name="Daniel" />
      <Greet name={10} />
      <br />
      <Greet2 name="Julie" />
      <Greet2 name={11} />
      <br />
      <GreetClass name="John Doe" />
      <GreetClass name="Jana Doe" />
    </div>
  );
}

export default App;
