// props extracted in an other object

export type Name = {
  firstName: string;
  lastName: string;
  id: number;
};

export type PersonProps = {
  name: Name;
  hobbies: string[];
};

export type PersonalitiesListProps = {
  names: {
    id: number;
    firstName: string;
    lastName: string;
  }[];
};
