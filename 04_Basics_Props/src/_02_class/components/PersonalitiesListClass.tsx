type PersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

export const PersonalitiesListClass = (props: PersonalitiesListProps) => {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.id}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};
