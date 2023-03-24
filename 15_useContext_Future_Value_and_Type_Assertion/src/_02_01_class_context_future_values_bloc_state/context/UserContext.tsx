//* VERSION 1 : future values for context & bloc states */
//
import { Component, createContext } from "react";

export type AuthUserProps = {
  name: string | null;
  email: string | null;
};

export type UserContextType = {
  state: AuthUserProps;
  handleLogin: () => void;
  handleLogout: () => void;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType | null>(null); // <-- VERSION 1

export class UserContextProvider extends Component<UserContextProviderProps> {
  state = {
    name: null,
    email: null,
  };

  handleLogin = () => {
    this.setState((prevState: AuthUserProps) => ({
      ...prevState,
      name: "Daniel",
      email: "daniel@mail.com",
    }));
  };

  handleLogout = () =>
    this.setState(() => ({
      name: null,
      email: null,
    }));
  render() {
    return (
      <UserContext.Provider
        value={{
          state: this.state,
          handleLogin: this.handleLogin,
          handleLogout: this.handleLogout,
        }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}
