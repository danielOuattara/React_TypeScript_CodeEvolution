import React, { Component } from "react";

type HeadingProps = {
  children: string | JSX.Element | React.ReactNode;
};

interface HeadingInterface {
  children: string | JSX.Element | React.ReactNode;
}

export class HeadingClass extends Component<HeadingProps> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}

export class HeadingClass2 extends Component<HeadingInterface> {
  render() {
    return <h3> {this.props.children}</h3>;
  }
}
