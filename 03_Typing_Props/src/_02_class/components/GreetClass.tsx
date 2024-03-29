/* 
type ==> for applications
interface ==> for libraries
*/

import { Component } from "react";

type GreetClassProps = {
  name?: string;
  number?: number;
};

//------------------------------------------------------------------

// Destructured props

export class GreetClass extends Component<GreetClassProps> {
  constructor(props: GreetClassProps) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Hello {this.props.name} </h2>
        <h3>{this.props.number}</h3>
      </div>
    );
  }
}

//--------------------------------------------------------

interface GreetClassInterface {
  name?: string | number;
  number?: number;
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
        {this.props.number && <h3>number: {this.props.number}</h3>}
      </div>
    );
  }
}

//---------------------------------------------------------

/* Typescript and React Class (stateful) component need more in depth !!!

link 1 : https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

link 2 : https://reactjs.org/docs/static-type-checking.html#typescript

*/
