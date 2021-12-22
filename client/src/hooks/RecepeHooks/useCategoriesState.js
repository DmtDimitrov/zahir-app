import { useState, useEffect } from "react";

import * as categoryService from '../../services/categoryService';

export const useCategoriesState = () => {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
        categoryService.getAll()
            .then(result => {
                setCategories(result)
            })
            .catch(err => {
                console.log('Category: err');
                console.log(err);
            })
    }, []);

    return [
        categories,
        setCategories
    ]
};

