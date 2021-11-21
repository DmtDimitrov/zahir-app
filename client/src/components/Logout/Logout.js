import { Redirect } from 'react-router-dom';

import * as authService from '../../services/authService';

export default function Logout({
    onLogout,
}) {

    onLogout();
    authService.logout();

    return <Redirect to="/login" replace={true} />;
}