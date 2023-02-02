/* 
type ==> for applications
interface ==> for libraries
*/

//--------------------------------------------------------------------
type GreetPropsType = {
  name: string | number;
};

export const Greet = (props: GreetPropsType) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {props.name}</h2>
    </div>
  );
};

//---------------------------------------------------------------------

interface GreetPropsInterface {
  name: string | number;
}
export const Greet2 = ({ name }: GreetPropsInterface) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
    </div>
  );
};
