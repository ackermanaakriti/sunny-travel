import React, { createContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const history = useHistory();

    useEffect(() => {

        const isAuthenticated = false;

        if (!isAuthenticated) {
            history.push('/login'); 
        }
    }, [history]);

    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext }; 
export default AuthProvider; 
