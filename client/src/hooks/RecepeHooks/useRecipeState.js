import { useState, useEffect } from "react";

import * as recipeService from '../../services/recipeService';
import { useRecipeContext } from '../../contexts/RecipeContext';

export const useRecipeState = (recipeId) => {
    const [recipe, setRecipe] = useState(null);
    const { setRecipeContext } = useRecipeContext();

    useEffect(() => {
        recipeService.getOne(recipeId)
            .then(result => {
                setRecipe(result);
                
            })
            .catch(error => {
                console.log(error);
            })
            .finally(result => {
                setRecipeContext(result)
            })
    }, [recipeId, setRecipeContext]);

    return [
        recipe,
        setRecipe
    ]
};

// export default useRecipeState;
