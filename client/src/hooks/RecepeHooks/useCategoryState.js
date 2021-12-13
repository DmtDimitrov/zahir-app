import { useState, useEffect } from "react";

import * as categoryService from '../../services/categoryService';


export const useCategoryState = () => {
    const [category, setCategory] = useState([]);
    

    useEffect(() => {
        categoryService.getAll()
            .then(result => {
                let categoryResult = Object.values(result);

                let categories = categoryResult.reduce((a, x) => {
                    if (!a[x.name]) {
                        a[x.name] = [];
                    }
                    a[x.name].push(x);
                    return a
                }, {});

                setCategory(categories)
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    return [
        category,
        setCategory
    ]
};


