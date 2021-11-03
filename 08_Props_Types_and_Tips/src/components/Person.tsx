 
import { PersonProps } from './../propsTypes/PersonProps.tsx'


export const Person = (props: PersonProps) => {
    const { firstName, lastName } = props.person;
    const hobbies = props.hobbies;
    return (
        <div>
            <h2> {firstName} {lastName}</h2>
            <br />
            <ul>
                { hobbies.map( (hobby) => {
                    return <li key={hobby }> { hobby } </li>
                })}
            </ul>
        </div>
    )
}
