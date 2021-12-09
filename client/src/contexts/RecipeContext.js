import { createContext, useContext } from 'react';

// import { useRecipeState } from '../hooks/useRecipeState';


export const RecipeContext = createContext();

// const initialRecipeState = {
//     category: '',
//     comments: [],
//     createdAt: '',
//     description: '',
//     image: '',
//     ingredients: [{}],
//     likes: [],
//     method: '',
//     ownerId: {},
//     title: '',
//     _id: '',
// };


// export const RecipeProvider = ({
//     children
// }) => {

//     const [recipe, setRecipe] = useRecipeState('recipeId', initialRecipeState);


//     return(
//         <RecipeContext.Provider>
//             {children}
//         </RecipeContext.Provider>
//     )
// };

// export const useRecipeContext = () => {
//     const RecipeState = useContext(RecipeContext);

//     return RecipeState;

/////////////////

// import { createContext, useContext } from 'react';

// import useLocalStorage from '../hooks/useLocalStorage';

// export const AuthContext = createContext();

// const initialAuthState = {
//     _id: '',
//     email: '',
//     accessToken: '',
// };

