import React, { createContext } from 'react';

export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const authInfo = {
        
    }
    return <AuthContext>
        {children}
    </AuthContext>
};

export default AuthProvider;