type HobbiesListPropsType = {
  hobbies: string[];
};

export const HobbiesList = (props: HobbiesListPropsType) => {
  return (
    <ul>
      <h2>Hobbies list</h2>
      {props.hobbies.map((hobby) => (
        <li key={hobby}> {hobby} </li>
      ))}
    </ul>
  );
};
