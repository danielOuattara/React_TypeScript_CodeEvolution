type HobbiesListProps = {
  hobbies: string[];
};

export const HobbiesList = (props: HobbiesListProps) => {
  const hobbies = props.hobbies;
  return (
    <ul>
      {hobbies.map((hobby) => {
        return <li key={hobby}> {hobby} </li>;
      })}
    </ul>
  );
};
