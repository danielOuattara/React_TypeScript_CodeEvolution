
type PersonnalitiesListProps = {
    names: {
        id: number,
        firstName: string,
        lastName: string,
    }[],
};

export const PersonalitiesList = (props: PersonnalitiesListProps) => {
    const names = props.names
    return (
        <div>
            {names.map((name) => {
                const {id, firstName, lastName} = name
                return <h2 key={id}>{firstName} {lastName}</h2>
            } )}
        </div>
    )
}
 