import { HOST } from "../constants";
import { FetchRequest } from "../helpers/FetchRequest";

// export function getAll() {
//     return fetch(`${HOST}/recipes`)
//         .then(res => res.json())
// };

export async function getAll() {
    try {
        let response = await fetch(`${HOST}/recipes`);
        let recipes = response.json();
        return recipes;

    } catch (error) {
        throw error
    }
};


// export async function getAll(){
//     let result = await FetchRequest(`${HOST}/recipes`);

//     return result;
// };

export async function getMy(token) {
    try {
       
        let response = await fetch(`${HOST}/recipes/my-recipes`, {
            headers: {
                'X-Authorization': token,
            },
        });
        let recipes = response.json();
        return recipes;
    } catch (error) {
        throw error
    }
};

export const getOne = async (recipeId) => {
    try {
        let response = await fetch(`${HOST}/recipes/${recipeId}`);
        let recipe = response.json();

        return recipe;

    } catch (error) {
        throw error
    }
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

export const deleteOne = async (recipeId, token) => {
    try {

        let response = await fetch(`${HOST}/recipes/${recipeId}`, {
            method: 'DELETE',
            headers: {
                'X-Authorization': token,
            },
        });
        let result = await response.json();

        return result;
    } catch (error) {
        throw error
    }
};

// export function getAuthor() {
//     return fetch(`${HOST}/recipes`)
//         .then(res => res.json())
// };