import { Component } from "react";

export type ProfileProps = {
  name: string;
};

export default class Profile extends Component<ProfileProps> {
  render() {
    return <div> Private Profile: user {this.props.name}</div>;
  }
}
