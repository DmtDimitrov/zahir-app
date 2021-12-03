import { HOST } from "../constants";

// export function getAll() {
//     return fetch(`${HOST}/recipes`)
//         .then(res => res.json())
// };

export async function getAll(){
    let response = await fetch(`${HOST}/recipes`);
    let recipes = response.json();
    return recipes;
};

export const getOne = async (recipeId) => {
    let response = await fetch(`${HOST}/recipes/${recipeId}`);
    let recipe = response.json();

    return recipe;
};

export const create = async (recipeData, token) => {
    try {
        let response = await fetch(`${HOST}/recipes`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': token,
            },
            body: JSON.stringify(recipeData)
        });
        let result = await response.json();
    
        return result;
        
    } catch (error) {
        throw error
    }
};

export function getAuthor() {
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};