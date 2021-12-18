import * as request from './requestService';

import { HOST } from "../constants";

export const login = async (userData) => {
    try {

        let loginResult =  await request.post(`${HOST}/users/login`, userData);
        console.log('loginResult');
        console.log(loginResult);
        return loginResult;
    } catch (error) {
        throw error;
    }
};
export const register = async (userData) => await request.post(`${HOST}/users/register`, userData);
export const logout = async () => await request.get(`${HOST}/users/logout`, undefined, true, true);
export const getAll = async () => await request.get(`${HOST}/users`);

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




