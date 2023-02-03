import { Component } from "react";

interface AuthUser {
  name: string;
  email: string;
}
// type AuthUser = {
//   name: string;
//   email: string;
// };

export class UserClass extends Component<AuthUser | null> {
  constructor(props: AuthUser | null) {
    super(props);

    /* TODO: complete satte type declaration and comment out below for testing */
    this.state = {
      user: {
        name: null,
        email: null,
      },
    };
  }

  handleLogin = () => {
    this.setState((prevState: {}) => ({
      ...prevState,
      name: "Daniel",
      email: "daniel@mail.com",
    }));
  };
  handleLogout = () => this.setState(() => null);

  render() {
    return (
      <div>
        {/* <h2> User name: {this.state.user?.name}</h2>
        <h2> User email: {this.state.user?.email} </h2>

        {this.state.user?.name && <h2> User name: {this.state.user?.name}</h2>}
        {this.state.user?.email && (
          <h2> User email: {this.state.user?.email}</h2>
        )} */}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}

// export default LoggedIn;
