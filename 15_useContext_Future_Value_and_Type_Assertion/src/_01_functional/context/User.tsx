// /* VERSION 1 : userContext check by if, line 10 & line 19 */
// import { useContext } from "react";
// import { UserContext } from "./UserContext";
// //----------------------------------------------------------

// export function User() {
//   const userContext = useContext(UserContext);

//   const handleLogin = () => {
//     // VERSION 1
//     if (userContext) {
//       userContext.setUser({
//         name: "daniel",
//         email: "daniel@email.com",
//       });
//     }
//   };

//   const handleLogout = () => {
//     // VERSION 1
//     if (userContext) {
//       userContext?.setUser(null);
//     }
//   };

//   return (
//     <>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Logout</button>
//       <div>User name is :{userContext?.user?.name} </div>
//       <div>User email is :{userContext?.user?.email} </div>
//     </>
//   );
// }

//---------------------------------------------------------------------------------

/* VERSION 2 : No userContext check: using type assertion strategy */

import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      name: "daniel",
      email: "daniel@email.com",
    });
  };

  const handleLogout = () => {
    userContext.setUser({
      name: "",
      email: "",
    });
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is :{userContext.user?.name} </div>
      <div>User email is :{userContext.user?.email} </div>
    </>
  );
};
