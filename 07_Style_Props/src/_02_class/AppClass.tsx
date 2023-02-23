import React, { Component } from "react";
import { ContainerClass } from "./components/ContainerClass";
import "./../App.css";

export default class AppClass extends Component {
  state = {
    style_container: {
      border: "2px solid grey",
      padding: "2rem",
      margin: "2rem",
      color: "blue",
      fontSize: "2em",
      borderLeft: "10px solid red",
    },
  };
  render() {
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
        <h2>Class Component</h2>
        <ContainerClass
          styles={{
            border: "5px solid green",
            padding: "2rem",
            margin: "2rem",
          }}
        />
        <ContainerClass styles={this.state.style_container} />
        <ContainerClass styles={style_container} />
      </div>
    );
  }
}
