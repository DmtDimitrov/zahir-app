import {  useHistory } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

export default function Logout() {
    let historyHook = useHistory();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(()=>{
            logout();
            historyHook.push('/login');
        })
    }, [])
    return null;

    // onLogout();
    // authService.logout();

    // return <Redirect to="/login" replace={true} />;
}