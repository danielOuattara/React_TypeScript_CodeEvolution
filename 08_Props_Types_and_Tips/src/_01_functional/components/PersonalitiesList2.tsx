import { Name } from "./../propsTypes/PersonProps2";

type PersonalitiesListProps = {
  names: Name[];
};

// export const PersonalitiesList2 = (props: PersonalitiesListProps) => {
//   const names = props.names;
//   return (
//     <div>
//       {names.map((name) => {
//         const { id, firstName, lastName } = name;
//         return (
//           <h2 key={id}>
//             {firstName} {lastName}
//           </h2>
//         );
//       })}
//     </div>
//   );
// };

//------------------------------------------------------------------------

export const PersonalitiesList2 = ({ names }: PersonalitiesListProps) => {
  return (
    <div>
      {names.map((name) => {
        const { id, firstName, lastName } = name;
        return (
          <h2 key={id}>
            {firstName} {lastName}
          </h2>
        );
      })}
    </div>
  );
};
