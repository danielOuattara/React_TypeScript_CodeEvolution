import { Component } from "react";

type GreetClassProps = {
  name: string;
};

//------------------------------------------------------------------

// Desctructured props

export class GreetClass extends Component<GreetClassProps> {
  constructor({ name }: GreetClassProps) {
    super({ name });
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
      </div>
    );
  }
}

//--------------------------------------------------------

interface GreetClassInterface {
  name: string | number;
}

export class GreetClass2 extends Component<GreetClassInterface> {
  constructor({ name }: GreetClassProps) {
    super({ name });
    this.state = {};
  }

  render() {
    return (
      <div>
        <h1>Hello {this.props.name} </h1>
      </div>
    );
  }
}

//---------------------------------------------------------

/* Typescript and React Class (stateful) component need more in deepth !!!

link 1 : https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

link 2 : https://reactjs.org/docs/static-type-checking.html#typescript

*/
