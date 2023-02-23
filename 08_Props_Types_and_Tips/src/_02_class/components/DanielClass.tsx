import React, { Component } from "react";

type DanielProps = {
  children: React.ReactNode; // <-- for a React component
};

export class DanielClass extends Component<DanielProps> {
  render() {
    return <h2>{this.props.children}</h2>;
  }
}
