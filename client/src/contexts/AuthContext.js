import { createContext, useContext } from 'react';

import { USER_LOCAL_STORAGE_KEY_NAME } from '../constants'

import { useLocalStorage } from '../hooks/useLocalStorage';

export const AuthContext = createContext();

const initialAuthState = {
    _id: '',
    email: '',
    accessToken: '',
};

export const AuthProvider = ({
    children
}) => {

    const [user, setUser] = useLocalStorage(USER_LOCAL_STORAGE_KEY_NAME, initialAuthState);

    const login = (authData) => {
        setUser(authData);
    };

    const logout = () => {
        setUser(initialAuthState);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = () => {
    const authState = useContext(AuthContext);

    return authState;
}