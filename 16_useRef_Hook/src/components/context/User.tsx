// VERSION 1 : userContext check by if, line 10 & line 19

// import { useContext } from "react";
// import { UserContext } from "./UserContext";

// export const User = () => {
//   const userContext = useContext(UserContext);

//   const handleLogin = () => {
//     if (userContext) {                                <-- VERSION 1
//       userContext.setUser({
//         name: "daniel",
//         email: "daniel@email.com",
//       });
//     }
//   };

//   const handleLogout = () => {
//     if (userContext) {                            <-- VERSION 1
//       userContext?.setUser(null);
//     }
//   };

//   return (
//     <>
//       <button onClick={handleLogin}>Login</button>
//       <button onClick={handleLogout}>Lougout</button>
//       <div>User name is :{userContext?.user?.name} </div>
//       <div>User email is :{userContext?.user?.email} </div>
//     </>
//   );
// };

//---------------------------------------------------------------------------------

// VERSION 2 : No userContext check

import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User = () => {
  const userContext = useContext(UserContext);

  const handleLogin = () => {
    userContext.setUser({
      // <-- VERSION 2
      name: "daniel",
      email: "daniel@email.com",
    });
  };

  const handleLogout = () => {
    userContext?.setUser(null);
  };

  return (
    <>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Lougout</button>
      <div>User name is :{userContext?.user?.name} </div>
      <div>User email is :{userContext?.user?.email} </div>
    </>
  );
};
