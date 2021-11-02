
/* 
type ==> for applications
interface ==> for libraries
 */

type GreetProps = {
    name: string
};

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome to React TypeScript, {props.name}</h2>            
        </div>
    )
}

