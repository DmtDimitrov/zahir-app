import { HOST } from "../constants";

export function getAll(){
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};

export function getAuthor(){
    return fetch(`${HOST}/recipes`)
        .then(res => res.json())
};