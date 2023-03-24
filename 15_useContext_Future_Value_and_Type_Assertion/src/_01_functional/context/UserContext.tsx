// /* VERSION 1 : userContext check by if, line 10 & line 19 in User.tsx */
// import { createContext, useState } from "react";

// export type AuthUser = {
//   name: string;
//   email: string;
// };

// type UserContextProviderProps = {
//   children: React.ReactNode;
// };

// export type UserContextType = {
//   user: AuthUser | null;
//   setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
// };

// export const UserContext = createContext<UserContextType | null>(null); // <-- VERSION 1

// export function UserContextProvider({ children }: UserContextProviderProps) {
//   const [user, setUser] = useState<AuthUser | null>(null);

//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// }

//--------------------------------------------------------------------------------------
/* VERSION 2 : to avoid userContext check by if, line 10 & line 19 in User.tsx 
                we can use type assertion */

/* Using 2 types assertions */

import { createContext, useState } from "react";

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export type UserContextType = {
  user: AuthUser;
  setUser: React.Dispatch<React.SetStateAction<AuthUser>>;
};

export const UserContext = createContext({} as UserContextType); // <-- VERSION 2

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser); // <-- VERSION 2

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
