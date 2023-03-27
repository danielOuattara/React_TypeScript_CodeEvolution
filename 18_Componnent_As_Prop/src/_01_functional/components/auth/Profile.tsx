
export type ProfileProps = {
  name: string;
};

const Profile = ({ name }: ProfileProps) => {
  return <div> Private Profile: user {name}</div>;
};

export default Profile;
