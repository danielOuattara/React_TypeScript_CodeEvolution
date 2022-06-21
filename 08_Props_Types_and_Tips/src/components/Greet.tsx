type GreetProps = {
  name: string;
  messageCount?: number; // ? -> optionnal props
  isLoggedIn: false;
};

/* 
type: for applications
interface: for libraries
 */

export const Greet = (props: GreetProps) => {
  const { name, messageCount, isLoggedIn } = props;
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h2> {messageCount} messages pending</h2>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
