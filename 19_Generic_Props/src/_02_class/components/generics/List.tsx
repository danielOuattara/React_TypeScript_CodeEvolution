// import { Component } from "react";

// type ListProps = {
//   items: string[] | number[];
//   onClick: (value: string | number) => void;
// };

// export class List extends Component<ListProps> {
//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <>
//         <h2>List of items :</h2>
//         {items.map((item, index) => (
//           <div key={index} onClick={() => onClick(item)}>
//             {item}
//           </div>
//         ))}
//       </>
//     );
//   }
// }

//----------------------------------------------------------

// /* Adding generics + constraints */

// import { Component } from "react";
// import ObjectLister from "./ObjectLister";
// type ListProps<T> = {
//   items: T[];
//   onClick: (value: T) => void;
// };

// export class List<T extends string | number | object> extends Component<
//   ListProps<T>
// > {
//   render() {
//     const { items, onClick } = this.props;
//     return (
//       <>
//         <h2>List of items :</h2>
//         {items.map((item, index) => {
//           if (
//             typeof item === "object" &&
//             !Array.isArray(item) &&
//             item !== null
//           ) {
//             return <ObjectLister item={item} />;
//           } else {
//             return (
//               <div key={index} onClick={() => onClick(item)}>
//                 {item}
//               </div>
//             );
//           }
//         })}
//       </>
//     );
//   }
// }

//----------------------------------------------------------

/* Adding generics + constraints + specific constraints on object */

import { Component } from "react";
import ObjectLister from "./ObjectLister";
type ListProps<T> = {
  items: T[];
  onClick: (value: T) => void;
};

export class List<T extends string | number | { id: number }> extends Component<
  ListProps<T>
> {
  render() {
    const { items, onClick } = this.props;
    return (
      <>
        <h2>List of items :</h2>
        {items.map((item, index) => {
          if (
            typeof item === "object" &&
            !Array.isArray(item) &&
            item !== null
          ) {
            return <ObjectLister item={item} />;
          } else {
            return (
              <div key={index} onClick={() => onClick(item)}>
                {item}
              </div>
            );
          }
        })}
      </>
    );
  }
}
