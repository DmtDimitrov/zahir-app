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

    // useEffect(() => {
    //     categoryService.getAll()
    //         .then(result => {
    //             let categoryResult = Object.values(result);

    //             let categoriesState = categoryResult.reduce((a, x) => {
    //                 if (!a[x.name]) {
    //                     a[x.name] = [];
    //                 }
    //                 a[x.name].push(x);
    //                 return a
    //             }, []);

    //             setCategories(categoriesState)
    //         })
    //         .catch(error => {
    //             console.log(error);
    //         })
    // }, []);

    return [
        categories,
        setCategories
    ]
};


// let categoriesCount = recipes?.map(x => x.category).reduce(function (allCat, cat) {
//     if (cat in allCat) {
//         allCat[cat]++
//     }
//     else {
//         allCat[cat] = 1
//     }
//     return allCat
//   }, {});