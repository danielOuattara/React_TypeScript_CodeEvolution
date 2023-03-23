type PersonalitiesListPropsType = {
  personalities: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};

export const PersonalitiesList = (props: PersonalitiesListPropsType) => {
  return (
    <div>
      {props.personalities.map((name) => {
        return (
          <h2 key={name.id}>
            {name.firstName} {name.lastName}
          </h2>
        );
      })}
    </div>
  );
};
