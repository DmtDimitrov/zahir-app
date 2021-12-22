import { useState, useEffect } from "react";

import * as authService from '../services/authService';

export const useChefState = (chefId) => {
    const [chef, setChef] = useState(null);

    useEffect(() => {
        authService.getOne(chefId)
            .then(result => {
                setChef(result);
            })
            .catch(error => {
                console.log(error);
            })
         
    }, [chefId]);

    return [
        chef,
        setChef
    ]
};
