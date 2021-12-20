import { useState, useEffect } from "react";

import * as recipeService from '../../services/recipeService';

export const useRecipesState = () => {
    const [recipes, setRecipes] = useState(null);


    useEffect(() => {
        recipeService.getAll()
            .then(result => {
                setRecipes(result)
            })
            .catch(err => {
                console.log('Recipe catalog: err');
                console.log(err);
            })
    }, []);

    return [
        recipes,
        setRecipes
    ]
};


