import { HOST } from "../constants";

import * as request from './requestService';

export const getAll = async () => await request.get(`${HOST}/recipes`);
export const getMy = async () => await request.get(`${HOST}/recipes/my-recipes`, undefined, true);
export const getOne = async (recipeId) => await request.get(`${HOST}/recipes/${recipeId}`, undefined);
export const create = async (recipeData) => await request.post(`${HOST}/recipes`, recipeData, true);
export const edit = async (recipeId, recipeData) => await request.put(`${HOST}/recipes/${recipeId}`, recipeData, true);
export const deleteOne = async (recipeId) => await request.del(`${HOST}/recipes/${recipeId}`, undefined, true);
export const like = async (recipeId, likes) => await request.patch(`${HOST}/recipes/${recipeId}`, likes, true);


// export function getAll() {
//     return fetch(`${HOST}/recipes`)
//         .then(res => res.json())
// };

// export async function getAll() {
//     try {
//         let response = await fetch(`${HOST}/recipes`);
//         let recipes = response.json();
//         return recipes;

//     } catch (error) {
//         throw error
//     }
// };


// export async function getMy(token) {
//     try {

//         let response = await fetch(`${HOST}/recipes/my-recipes`, {
//             headers: {
//                 'X-Authorization': token,
//             },
//         });
//         let recipes = response.json();
//         return recipes;
//     } catch (error) {
//         throw error
//     }
// };

// export const getOne = async (recipeId) => {
//     try {
//         let response = await fetch(`${HOST}/recipes/${recipeId}`);
//         let recipe = response.json();

//         return recipe;

//     } catch (error) {
//         throw error
//     }
// };

// export const create = async (recipeData, token) => {
//     try {
//         let response = await fetch(`${HOST}/recipes`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json',
//                 'X-Authorization': token,
//             },
//             body: JSON.stringify(recipeData)
//         });
//         let result = await response.json();

//         return result;

//     } catch (error) {
//         throw error
//     }
// };


// export const edit = async (recipeId, recipeData, token) => {
//     try {
//         let response = await fetch(`${HOST}/recipes/${recipeId}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json',
//                 'X-Authorization': token,
//             },
//             body: JSON.stringify(recipeData)
//         });
//         let result = await response.json();

//         return result;

//     } catch (error) {
//         throw error
//     }
// };

// export const deleteOne = async (recipeId, token) => {
//     try {

//         let response = await fetch(`${HOST}/recipes/${recipeId}`, {
//             method: 'DELETE',
//             headers: {
//                 'X-Authorization': token,
//             },
//         });
//         let result = await response.json();

//         return result;
//     } catch (error) {
//         throw error
//     }
// };

// export const like = async (recipeId, likes, token) => {
//     try {
//         let response = await fetch(`${HOST}/recipes/${recipeId}`, {
//             method: 'PATCH',
//             headers: {
//                 'content-type': 'application/json',
//                 'X-Authorization': token,
//             },
//             body: JSON.stringify(likes)
//         });
//         let result = await response.json();

//         return result;
//     } catch (error) {
//         throw error
//     }
// };



// export function getAuthor() {
//     return fetch(`${HOST}/recipes`)
//         .then(res => res.json())
// };