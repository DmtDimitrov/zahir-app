import { USERNAME } from '../constants';
import { HOST } from "../constants";

export async function login(email, password) {

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
        return jsonResult;
    } catch (error) {
        throw error;
    }
};

export async function register({
    firstName,
    lastName,
    email,
    password,
    repeatPassword
}) {

    try {
        let response = await fetch(`${HOST}/users/register`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                firstName,
                lastName,
                email,
                password,
                repeatPassword
            })
        })
        
        let jsonResult = await response.json();

        if (!response.ok) {
           throw jsonResult;
            // throw new Error(`${response.status}: ${response.statusText}\n${message}`);
        }
        return jsonResult;
    } catch (error) {
        throw error;
    }
};

export function logout(token) {
    return fetch(`${HOST}/users/logout`, {
        headers: {
            'X-Authorization': token,
        }
    })
};

export function getUser() {
    let username = localStorage.getItem(USERNAME);

    return username;
};

export function isAuth() {
    return Boolean(getUser())
};