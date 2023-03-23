/* 
type ==> for applications
interface ==> for libraries
*/

//--------------------------------------------------------------------
type GreetPropsType = {
  name: string | number;
  number: number;
};

export const Greet = (props: GreetPropsType) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {props.name}</h2>
      <h3>{props.number}</h3>
    </div>
  );
};

//---------------------------------------------------------------------

interface Greet2PropsInterface {
  name?: string | number;
  number?: number;
}
export const Greet2 = ({ name, number }: Greet2PropsInterface) => {
  return (
    <div>
      <h2>Welcome to React TypeScript, {name}</h2>
      <h3>{number}</h3>
    </div>
  );
};
