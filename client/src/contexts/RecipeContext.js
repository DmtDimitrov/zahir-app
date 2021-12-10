import { createContext, useContext } from 'react';

import { useLocalStorage } from '../hooks/useLocalStorage';


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

    const [recipe, setRecipe] = useLocalStorage('recipe', initialRecipeState);
 
    const setRecipeContext = (recipeData) => {
        setRecipe(recipeData);
    };

    const resetRecipeContext = () => {
        setRecipe(initialRecipeState);
    };
    return(
        <RecipeContext.Provider value={{ recipe, setRecipeContext, resetRecipeContext }}>
            {children}
        </RecipeContext.Provider>
    )
};

export const useRecipeContext = () => {
    const recipeState = useContext(RecipeContext);

    return recipeState;
}

