import { useState } from 'react';


export const LoggedIn = () => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    
    const handleLogin = () => {
        setIsLoggedIn(true)
    }

    const handleLogout = () => {
        setIsLoggedIn(false)
    }

    return (
        <div>
            <h2> User is {isLoggedIn ? 'logged in' : 'logged out'}</h2>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            
        </div>
    )
}

// export default LoggedIn;
