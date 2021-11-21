import { USERNAME } from '../constants'

export function login(username) {
    localStorage.setItem(USERNAME, username);
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