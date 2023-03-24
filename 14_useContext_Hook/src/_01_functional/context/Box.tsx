// import { useContext } from "react";
// import { ThemeContext } from "./ThemeContext";

// export const Box = () => {
//   const theme = useContext(ThemeContext);
//   return (
//     <>
//       <div
//         style={{
//           backgroundColor: theme.primary.main,
//           color: theme.primary.text,
//         }}
//       >
//         Theme Context
//       </div>
//       <div
//         style={{
//           backgroundColor: theme.secondary.main,
//           color: theme.secondary.text,
//         }}
//       >
//         Theme Context Secondary
//       </div>
//     </>
//   );
// };

//--------------------------------------------------------------
/* using context API ThemeContext.Consumer : OK */

import { ThemeContext } from "./ThemeContext";

export function Box() {
  return (
    <ThemeContext.Consumer>
      {(context) => (
        <>
          <div
            style={{
              backgroundColor: context.primary.main,
              color: context.primary.text,
            }}
          >
            Theme Context primary
          </div>
          <div
            style={{
              backgroundColor: context.secondary.main,
              color: context.secondary.text,
            }}
          >
            Theme Context Secondary
          </div>
        </>
      )}
    </ThemeContext.Consumer>
  );
}
