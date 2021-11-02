
type GreetProps = {
    name: string,
    messageCount: number,
    isLoggedIn: false,
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome to React TypeScript, {props.name}</h2>            
            <h2> {props.messageCount} messages pending</h2>  
            { props.isLoggedIn ? <p>Use is logged in</p> : <p>Use is disconnected</p> }
        </div>
    )
}
