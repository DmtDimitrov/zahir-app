
export function emptyFieldsChecker(fieldsData) {
    return Object.values(fieldsData).every(x => x);
};

export function passwordMatchChecker(fieldsData) {
    let { password, repeatPassword } = fieldsData;
    return password === repeatPassword ? true : false;
};
