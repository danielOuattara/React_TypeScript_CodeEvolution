import { Component } from "react";

type CSSProps = {
  styles: React.CSSProperties;
};

export class ContainerClass extends Component<CSSProps> {
  render() {
    return <div style={this.props.styles}>Text content goes here</div>;
  }
}
