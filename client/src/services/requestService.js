import { USER_LOCAL_STORAGE_KEY_NAME } from '../constants'

export const request = async (method, url, data, isAuthorized, skipResult) => {
    try {
        let result = null;
        let headers = {};

        if (['POST', 'PUT', 'PATCH'].includes(method)) {
            headers['Content-Type'] = 'application/json';
        }

        if (isAuthorized) {
            headers['X-Authorization'] = getToken();
        }

        let options = {
            headers,
            method
        };
    
        if (data !== undefined) {
            options.body = JSON.stringify(data);
        }

        let response = await fetch(url, options);
        if (!response.ok) {
            let message = await response.text();
            throw new Error(`${response.status}: ${response.statusText}\n${message}`);
        }
    
        if (!skipResult) {
            result = await response.json();
        }
        return result;
     
        
    } catch (error) {
        console.log(error);
    }
};


function getToken() {
    try {
        let userItem = localStorage.getItem(USER_LOCAL_STORAGE_KEY_NAME);

        if (!userItem) {
            throw new Error('You are not authenticated!') 
        };

        let user = JSON.parse(userItem);

        return user.accessToken;
    } catch (error) {
        console.log(error);
    }
}

export const get = request.bind(null, 'GET');
export const post = request.bind(null, 'POST');
export const put = request.bind(null, 'PUT');
export const patch = request.bind(null, 'PATCH');
export const del = request.bind(null, 'DELETE');