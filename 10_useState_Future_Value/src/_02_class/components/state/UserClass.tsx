// import { Component } from "react";

// // interface AuthUser {
// //   name: string;
// //   email: string;
// // }

// //------------------------ OR

// // type AuthUser = {
// //   name: string;
// //   email: string;
// // };

// export class UserClass extends Component {
//   state = {
//     user: {
//       name: null,
//       email: null,
//     },
//   };

//   handleLogin = () => {
//     this.setState((prevState: {}) => ({
//       ...prevState,
//       user: {
//         name: "Daniel",
//         email: "danil@mail.com",
//       },
//     }));
//   };
//   handleLogout = () =>
//     this.setState(() => ({
//       user: {
//         name: null,
//         email: null,
//       },
//     }));

//   render() {
//     console.log(this.state);
//     return (
//       <div>
//         <p>Hello</p>
//         <h2> User name: {this.state.user?.name}</h2>
//         <h2> User email: {this.state.user?.email} </h2>

//         {this.state.user?.name && <h2> User name: {this.state.user?.name}</h2>}

//         {this.state.user?.email && (
//           <h2> User email: {this.state.user?.email}</h2>
//         )}

//         <button onClick={this.handleLogin}>Login</button>
//         <button onClick={this.handleLogout}>Logout</button>
//       </div>
//     );
//   }
// }

//--------------------------------------------------------------

import { Component } from "react";

interface AuthUser {
  name: string | null;
  email: string | null;
}

//------------------------ OR

// type AuthUser = {
//   name: string;
//   email: string;
// };

export class UserClass extends Component<{}, AuthUser> {
  state = {
    name: null,
    email: null,
  };

  handleLogin = () => {
    this.setState((prevState: AuthUser) => ({
      ...prevState,
      name: "Daniel",
      email: "danil@mail.com",
    }));
  };
  handleLogout = () =>
    this.setState(() => ({
      name: null,
      email: null,
    }));

  render() {
    console.log(this.state);
    return (
      <div>
        <p>Hello</p>
        <h2> User name: {this.state.name}</h2>
        <h2> User email: {this.state.email} </h2>

        {this.state.name && <h2> User name: {this.state.name}</h2>}

        {this.state.email && <h2> User email: {this.state.email}</h2>}

        <button onClick={this.handleLogin}>Login</button>
        <button onClick={this.handleLogout}>Logout</button>
      </div>
    );
  }
}
