import { HOST } from "../constants";


export async function getAll(){
    let response = await fetch(`${HOST}/category`);
    let category = response.json();
    return category;
};

export const create = async (categoryData) => {
    let response = await fetch(`${HOST}/category`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify(categoryData)
    });
    let result = await response.json();

    return result;
};