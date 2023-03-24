import { Component } from "react";

// interface AuthUserInterface {
//   name: string;
//   email: string;
// }

//------------------------ OR

type AuthUserType = {
  name: string;
  email: string;
};

/* 

  if you are sure that user values will be given just 
  after component mounted, then tell TypeScript that 
  empty object {} is asserted to be AuthUser 

  In this case we do not need to use ? optional operator

*/

export class UserClass extends Component {
  state = {
    user: {} as AuthUserType,
  };

  handleLogin = () => {
    this.setState((prevState: {}) => ({
      ...prevState,
      user: {
        name: "Daniel",
        email: "daniel@mail.com",
      },
    }));
  };
  handleLogout = () =>
    this.setState(() => ({
      user: {
        name: null,
        email: null,
      },
    }));

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello</p>
        <h2> User name: {this.state.user.name}</h2>
        <h2> User email: {this.state.user.email} </h2>

        {this.state.user.name && <h2> User name: {this.state.user.name}</h2>}

        {this.state.user.email && <h2> User email: {this.state.user.email}</h2>}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
