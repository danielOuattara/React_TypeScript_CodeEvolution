
type HobbiesListProps = {
    hobbies: string[],
};

export const HobbiesList = (props: HobbiesListProps) => {
    const hobbies = props.hobbies;
    return (
        <ul>
            <h2>Hobbies list</h2>
            {hobbies.map((hobby) => <li key={hobby}> {hobby} </li>)}
        </ul>
    );
}
