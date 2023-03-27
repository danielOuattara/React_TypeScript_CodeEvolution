import { Component } from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProps>;
};

export default class Private extends Component<PrivateProps> {
  render() {
    // below destructuring is necessary
    const { isLoggedIn, component: Component } = this.props;
    if (isLoggedIn) {
      return <Component name="Daniel" />;
    } else {
      return <Login />;
    }
  }
}
