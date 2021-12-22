import { useState, useEffect } from "react";

import * as recipeService from '../../services/recipeService';

export const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState(null);
   

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
            })
            .catch(error => {
                console.log(error);
            })
         
    }, [recipeId]);

    return [
        recipe,
        setRecipe
    ]
};
