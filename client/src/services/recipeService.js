import { HOST } from "../constants";

export function getAll() {
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};

// export async function getAll(){
//     let response = await fetch(`${HOST}/recipes`);
//     let recipes = response.json();
//     let result = Object.values(recipes)
//     return result;
// };

export function getAuthor() {
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};