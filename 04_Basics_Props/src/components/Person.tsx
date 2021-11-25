 
type PersonProps = {
    person: {
        firstName: string,
        lastName: string,
    },
    hobbies: string [],
};

export const Person = (props: PersonProps) => {
    const { firstName, lastName } = props.person;
    const hobbies = props.hobbies;
    const [one, two,three] = props.hobbies;
    return (
        <div>
            <h2> {firstName} {lastName}</h2>
            <br />
            <ul>
                { hobbies.map( (hobby) =><li key={hobby}> {hobby} </li>)}
            </ul>

            <ol type='I'>
                <li>{one}</li>
                <li>{two}</li>
                <li>{three}</li>
            </ol>
        </div>
    );
}
