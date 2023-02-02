import { Component } from "react";

//--------------------------------------------------------------

type GreetClassProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export class GreetClass extends Component<GreetClassProps> {
  constructor(props: GreetClassProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
        <h2> {this.props.messageCount} messages pending</h2>
        {this.props.isLoggedIn ? (
          <p>User is logged in</p>
        ) : (
          <p>User is disconnected</p>
        )}
      </div>
    );
  }
}

//--------------------------------------------------------------

interface GreetClassInterface {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
}

export class GreetClass2 extends Component<GreetClassInterface> {
  constructor(props: GreetClassProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
        <h2> {this.props.messageCount} messages pending</h2>
        {this.props.isLoggedIn ? (
          <p>User is logged in</p>
        ) : (
          <p>User is disconnected</p>
        )}
      </div>
    );
  }
}

/* Typescript and React Class (stateful) component need more in deepth !!!

link 1 : https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

link 2 : https://reactjs.org/docs/static-type-checking.html#typescript

*/
