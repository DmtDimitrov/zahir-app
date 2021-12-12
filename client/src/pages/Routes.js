import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';

export const RouteGuards = () => {
    const { user, isAuthenticated } = useAuthContext();


    console.log("user");
    console.log(user);
    console.log("isAuthenticated");
    console.log(isAuthenticated);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}


