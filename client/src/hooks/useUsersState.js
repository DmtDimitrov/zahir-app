import { useState, useEffect } from "react";

import * as authService from '../services/authService';

export const useUsersState = () => {
    const [users, setUsers] = useState(null);

    useEffect(() => {
        authService.getAll()
            .then(result => {
                setUsers(result)
            })
            .catch(err => {
                console.log('Users catalog: err');
                console.log(err);
            })
    }, []);

    return [
        users,
        setUsers
    ]
};
