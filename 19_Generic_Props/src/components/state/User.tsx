
import { useState } from 'react';

type AuthUser = {
    name: string
    email: string
};

export const User = () => {
    // const [user, setUser] = useState<AuthUser | null>(null); 
                                                                // type assertion
    const [user, setUser] = useState<AuthUser>({} as AuthUser); // if you are sur that user will be given jsut after connexion
    const handleLogout = () => setUser({name: "", email: ""});
    const handleLogin = () => {
        setUser({
            name: 'Daniel',
            email: 'daniel@mail.com',
        });
    }

    return (
        <div>
            <h2> User name is {user?.name}</h2>
            <h2> User email is {user?.email} </h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}
