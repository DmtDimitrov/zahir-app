export function login(username) {
    localStorage.setItem('username', username);
};

export function getUser() {
    let username = localStorage.getItem('username');

    return username;
};

export function isAuth() {
    return Boolean(getUser())
};