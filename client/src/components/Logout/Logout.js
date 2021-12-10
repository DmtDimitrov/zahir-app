import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';

export default function Logout() {
    let navigate = useNavigate();
    const { user, logout } = useAuthContext();
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(()=>{
            logout();
            navigate('/login');
        })
    }, [user.accessToken, logout, navigate])
    return null;

    // onLogout();
    // authService.logout();

    // return <Redirect to="/login" replace={true} />;
}