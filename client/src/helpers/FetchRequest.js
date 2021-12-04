// import { useContext } from 'react';

// import { AuthContext } from '../contexts/AuthContext';

// export async function FetchRequest(url, method, body, isAuthorized, skipResult) {

//     const { user } = useContext(AuthContext)
//     if (method === undefined) {
//         method = 'GET';
//     }

//     let headers = {};
//     if (['POST', 'PUT', 'PATCH'].includes(method)) {
//         headers['Content-Type'] = 'application/json';
//     }

//     if (isAuthorized) {
//         headers['X-Authorization'] = user.accessToken;
//     }

//     let options = {
//         headers,
//         method
//     };

//     if (body !== undefined) {
//         options.body = JSON.stringify(body);
//     }

//     let response = await fetch(url, options);
//     if (!response.ok) {
//         let message = await response.text();
//         throw new Error(`${response.status}: ${response.statusText}\n${message}`);
//     }

//     let result = undefined;
//     if (!skipResult) {
//         result = await response.json();
//     }
//     return result;
// }

