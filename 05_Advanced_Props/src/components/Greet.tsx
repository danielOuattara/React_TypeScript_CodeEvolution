/* 
type: for applications
interface: for libraries
 */

type GreetProps = {
  name: string;
  messageCount?: number; // the '?' --> optionnal props
  isLoggedIn: false;
};

export const Greet = (props: GreetProps) => {
  const { name, messageCount = 0, isLoggedIn } = props;
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h2> {messageCount} messages pending</h2>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
