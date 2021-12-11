import * as request from './requestService';
// request.method(url, data, isAuthorized, skipResult)

import { HOST } from "../constants";

// export const getAll = () => request.get(`${HOST}/recipes`);
// export const getMy = async () => await request.get(`${HOST}/recipes/my-recipes`, undefined, true);
// export const getOne = async (recipeId) => await request.get(`${HOST}/recipes/${recipeId}`, undefined);
// export const create = async (recipeData) => await request.post(`${HOST}/recipes`, recipeData, true);
// export const edit = async (recipeId, recipeData) => await request.put(`${HOST}/recipes/${recipeId}`, recipeData, true);
// export const deleteOne = async (recipeId) => await request.del(`${HOST}/recipes/${recipeId}`, undefined, true);

export const login = async (userData) => await request.post(`${HOST}/users/login`, userData);
export const register = async (userData) => await request.post(`${HOST}/users/register`, userData);
export const logout = async () => await request.get(`${HOST}/users/logout`, undefined, true, true);

// export function logout(token) {
//     return fetch(`${HOST}/users/logout`, {
//         headers: {
//             'X-Authorization': token,
//         }
//     })
// };
// export async function login(email, password) {

//     try {
//         let response = await fetch(`${HOST}/users/login`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({ email, password })
//         })
        
//         let jsonResult = await response.json();

//         if (!response.ok) {
//            throw jsonResult;
//             // throw new Error(`${response.status}: ${response.statusText}\n${message}`);
//         }
//         return jsonResult;
//     } catch (error) {
//         throw error;
//     }
// };

// export async function register({
//     firstName,
//     lastName,
//     email,
//     password,
//     repeatPassword
// }) {

//     try {
//         let response = await fetch(`${HOST}/users/register`, {
//             method: 'POST',
//             headers: {
//                 'content-type': 'application/json'
//             },
//             body: JSON.stringify({
//                 firstName,
//                 lastName,
//                 email,
//                 password,
//                 repeatPassword
//             })
//         })
        
//         let jsonResult = await response.json();

//         if (!response.ok) {
//            throw jsonResult;
//             // throw new Error(`${response.status}: ${response.statusText}\n${message}`);
//         }
//         return jsonResult;
//     } catch (error) {
//         throw error;
//     }
// };


// export function getUser() {
//     let user = localStorage.getItem('user') === null 
//     ? undefined 
//     : JSON.parse(localStorage.getItem('user'));

//     return user;
// };

// export function isAuth() {
//     return Boolean(getUser())
// };




