import { Component } from "react";
import "./../App.css";

export default class AppClass extends Component {
  render() {
    return (
      <div className="App">
        <h2>Class Component</h2>
        <p>
          Impossible native class component with useReducer. Waiting for Redux
        </p>
      </div>
    );
  }
}
