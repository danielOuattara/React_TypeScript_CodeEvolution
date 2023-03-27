/**
 *
 *  Position prop cab be one of :
 *  "left-center" | " left-top" | "left-bottom" |
 *  "center" | "center-top" | "center-bottom" |
 *  "right-center" | right-top | right-bottom
 *
 *  */

import { Component } from "react";

type HorizontalPositionType = "left" | "center" | "right";
type VerticalPositionType = "top" | "center" | "bottom";
type ToastPropsType = {
  position:
    | Exclude<
        `${HorizontalPositionType}-${VerticalPositionType}`,
        "center-center"
      >
    | "center";
};

export class Toast extends Component<ToastPropsType> {
  render() {
    return <div>Toast Notification position - {this.props.position}</div>;
  }
}
