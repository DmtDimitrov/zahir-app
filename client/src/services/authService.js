import { USERNAME } from '../constants';
import { HOST } from "../constants";

export async function login(email, password) {

    console.log('AuthService:email');
    console.log(email);
    console.log('AuthService:password');
    console.log(password);

    try {
        let response = await fetch(`${HOST}/users/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        
        let jsonResult = await response.json();

        if (!response.ok) {
           throw jsonResult;
            // throw new Error(`${response.status}: ${response.statusText}\n${message}`);
        }
        console.log('jsonResult authService Client');
        console.log(jsonResult);
        return jsonResult;
    } catch (error) {
        throw error;
    }
};

export function logout() {
    localStorage.removeItem(USERNAME);
};

export function getUser() {
    let username = localStorage.getItem(USERNAME);

    return username;
};

export function isAuth() {
    return Boolean(getUser())
};