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

export const create = async (recipeData) => {
    let response = await fetch(`${HOST}/recipes`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(recipeData)
    });
    let result = await response.json();

    return result;
};

export function getAuthor() {
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};