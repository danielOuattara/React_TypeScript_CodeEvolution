import { useState } from 'react';

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser | null>(null);
    const handleLogin = () => {
        setUser({
            name: 'Daniel',
            email: 'daniel@mail.com',
        });
    }
    const handleLogout = () => setUser(null);

    return (
        <div>
            <h2> User name is {user?.name}</h2>
            <h2> User email is {user?.email} </h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

// export default LoggedIn;
