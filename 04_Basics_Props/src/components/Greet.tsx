type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

//------------------------------------------------------------------
// export const Greet = (props: GreetProps) => {
//   return (
//     <div>
//       <h2>Welcome to React TypeScript, {props.name}</h2>
//       <h2> {props.messageCount} messages pending</h2>
//       {props.isLoggedIn ? (
//         <p>User is logged in</p>
//       ) : (
//         <p>User is disconnected</p>
//       )}
//     </div>
//   );
// };

//-------------------------------------------------------------------

export const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h2> {messageCount} messages pending</h2>
      {isLoggedIn ? <p>User is logged in</p> : <p>User is disconnected</p>}
    </div>
  );
};
