import { useState, useEffect } from "react";

import * as recipeService from '../services/recipeService';
import { useRecipeContext } from '../contexts/RecipeContext';

export const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState();
    const { setRecipeContext } = useRecipeContext();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
                setRecipeContext(result)
            })
    }, [recipeId]);

    return [
        recipe,
        setRecipe
    ]
};

// export default useRecipeState;