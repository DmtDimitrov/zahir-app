import { HOST } from "../constants";

export const getAll = async () => await request.get(`${HOST}/category`);
export const create = async (categoryData) => await request.post(`${HOST}/category`, categoryData, true);

// export async function getAll(){
//     let response = await fetch(`${HOST}/category`);
//     let category = response.json();
//     return category;
// };

// export const create = async (categoryData) => {
//     let response = await fetch(`${HOST}/category`, {
//         method: 'POST',
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify(categoryData)
//     });
//     let result = await response.json();

//     return result;
// };