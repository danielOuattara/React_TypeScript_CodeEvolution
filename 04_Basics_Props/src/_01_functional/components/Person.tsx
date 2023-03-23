type PersonPropsType = {
  person: {
    firstName: string;
    lastName: string;
  };
  hobbies: string[];
};

export const Person = (props: PersonPropsType) => {
  const [one, two, three] = props.hobbies;

  return (
    <div>
      <h2>
        {props.person.firstName} {props.person.lastName}
      </h2>
      <br />
      <ul>
        {props.hobbies.map((hobby) => (
          <li key={hobby}> {hobby} </li>
        ))}
      </ul>

      <ol type="I">
        <li>{one}</li>
        <li>{two}</li>
        <li>{three}</li>
      </ol>
    </div>
  );
};
