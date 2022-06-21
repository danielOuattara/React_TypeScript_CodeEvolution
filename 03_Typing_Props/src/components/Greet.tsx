/* 
type ==> for applications
interface ==> for libraries
 */

type GreetProps = {
  name: string | number;
};

// export const Greet = (props: GreetProps) => {
//   return (
//     <div>
//       <h2>Welcome to React TypeScript, {props.name}</h2>
//     </div>
//   );
// };

//---------------------------------------------------------------------

export const Greet = ({name}: GreetProps) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
    </div>
  );
};
