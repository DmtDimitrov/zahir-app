import { createContext, useContext, useCallback } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';

import { RECIPE_LOCAL_STORAGE_KEY_NAME } from '../constants';

export const RecipeContext = createContext();

const initialRecipeState = {
    category: '',
    comments: [],
    createdAt: '',
    description: '',
    image: '',
    ingredients: [{}],
    likes: [],
    method: '',
    ownerId: {},
    title: '',
    _id: '',
};


export const RecipeProvider = ({
    children
}) => {

    const [recipe, setRecipe] = useLocalStorage(RECIPE_LOCAL_STORAGE_KEY_NAME, initialRecipeState);
   
    const setRecipeContext = useCallback((recipeData) => {
        setRecipe(recipeData);
    }, []);

    const resetRecipeContext = () => {
        setRecipe(initialRecipeState);
    };
    return (
        <RecipeContext.Provider value={{ recipe, setRecipeContext, resetRecipeContext }}>
            {children}
        </RecipeContext.Provider>
    )
};

export const useRecipeContext = () => {
    const recipeState = useContext(RecipeContext);

    return recipeState;
}

