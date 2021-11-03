// props extracted in an other object

export type Name = {
    firstName: string,
    lastName: string
};


export type PersonProps = {
    name: Name
    hobbies: string[],
};