import {  useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNotificationContext, types } from '../../contexts/NotificationContext';

export default function Logout() {
    let navigate = useNavigate();
    const { user, logout } = useAuthContext();
    const { addNotification } = useNotificationContext();
    useEffect(() => {
        authService.logout(user.accessToken)
        .then(()=>{
            logout();
            addNotification('You logged out successfully', types.success, 'Success')
            navigate('/login');
        })
        .catch(error => {
            console.log(error);
        })
    }, [user.accessToken, logout, navigate, addNotification])
    return null;

    // onLogout();
    // authService.logout();

    // return <Redirect to="/login" replace={true} />;
}