
export function emptyFieldsChecker(fieldsData) {
    return Object.values(fieldsData).every(x => x);
};

export function validatePasswords(fieldsData) {
    let { password, repeatPassword } = fieldsData;
    return password === repeatPassword ? true : false;
};

export function validateImageUrl(image) {
    
    const regex = new RegExp(/^https?:\/\//i);
        const isValid = regex.test(image);

        return isValid;

};
