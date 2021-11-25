
import { Component } from 'react';

type GreetClassProps = {
    name: string,
}

export default class Greet extends Component <GreetClassProps> {
    constructor(props: GreetClassProps) {
        super(props)
        this.state = {}
    }
    
    render() {
        return (
            <div>
                <h1>Hello {this.props.name} </h1>
            </div>
        )
    }
}

/* Typescript and React Class (stateful) component need more in deepth !!!

link 1 : https://github.com/Microsoft/TypeScript-React-Starter#typescript-react-starter

link 2 : https://reactjs.org/docs/static-type-checking.html#typescript

*/