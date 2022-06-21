import { Name } from "../propsTypes/PersonProps2";

type PersonnalitiesListProps = {
  names: Name[];
};

export const PersonalitiesList2 = (props: PersonnalitiesListProps) => {
  const names = props.names;
  return (
    <div>
      {names.map((name) => {
        const { id, firstName, lastName } = name;
        return (
          <h2 key={id}>
            {firstName} {lastName}
          </h2>
        );
      })}
    </div>
  );
};
