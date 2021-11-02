

// export const Greet = (props) => {
//     return (
//         <div>
//             <h2>Welcome to React TypeScript, {props.name}</h2>            
//         </div>
//     )
// }


// export const Greet = (props: string) => {
//     return (
//         <div>
//             <h2>Welcome to React TypeScript, {props.name}</h2>            
//         </div>
//     )
// }


type GreetProps = {
    name: string
};


/* 
type: for applications
interface: for libraries
 */

export const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome to React TypeScript, {props.name}</h2>            
        </div>
    )
}
