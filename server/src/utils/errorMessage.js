export function getErrorMessage(error) {
    let errorMsg = '';
	if (!error) {
		return 'Something went wrong';
	} else if (error.name === 'ValidationError') {
		Object.keys(error.errors).forEach((key) => {
			errorMsg = error.errors[key].message;
		});

		return errorMsg;
	} else {
		errorMsg = error;

		return errorMsg;
	}
};