import {  useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';

import * as authService from '../../services/authService';
import { AuthContext } from '../../contexts/AuthContext';

export default function Logout() {
    let navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(()=>{
            logout();
            navigate('/login');
        })
    }, [])
    return null;

    // onLogout();
    // authService.logout();

    // return <Redirect to="/login" replace={true} />;
}