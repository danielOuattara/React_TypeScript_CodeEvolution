
import { useState } from 'react';

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Daniel',
            email: 'daniel@mail.com'
        })
    }

    return (
        <div>
            <h2> User name is {user?.name}</h2>
            <h2> User email is {user?.email} </h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    )
}

// export default LoggedIn;
