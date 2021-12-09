import { useState, useEffect } from "react";

import * as recipeService from '../services/recipeService';

export const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
    }, [recipeId]);

    return [
        recipe,
        setRecipe
    ]
};

// export default useRecipeState;



// const useLocalStorage = (key, initialValue) => {
//     const [state, setState] = useState(() => {
//         try {
//             let item = localStorage.getItem(key);

//             return item
//                 ? JSON.parse(item)
//                 : initialValue;
//         } catch (error) {
//             console.log(error);
//             return initialValue;
//         }
//     });

//     const setItem = (value) => {
//         //TODO: add support for functions

//         try {
//             localStorage.setItem(key, JSON.stringify(value));

//             setState(value);
//         } catch (error) {
//             console.log(error);
//         }
//     };

//     return [
//         state,
//         setItem
//     ];
// };

// export default useLocalStorage;