import { Component } from "react";
import "./../App.css";
import { ThemeContextProvider } from "./context/ThemeContext";
import { Box } from "./context/Box";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
    );
  }
}
