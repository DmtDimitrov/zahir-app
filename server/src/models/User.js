import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    firstName: {
		type: String,
		required: [true, 'First Name is required!'],
		minlength: [3, 'First Name should be more than 3 characters long!'],
		validate: [/^[a-zA-Z\s]+$/, 'First Name should contains only English letters'],
	},
    lastName: {
		type: String,
		required: [true, 'Last Name is required!'],
		minlength: [5, 'Last Name should be more than 5 characters long!'],
		validate: [/^[a-zA-Z\s]+$/, 'Last Name should contains only English letters'],
	},
    email: {
		type: String,
		required: [true, 'Email is required!'],
		validate: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/i, 'Email should be valid and consist latin letters!'],
	},
    password: {
		type: String,
		required: [true, 'Password is required!'],
		minlength: [4, 'Password should be more than 4 characters long!'],
	},

});

userSchema.method('validatePassword', function (password) {
	return bcrypt.compare(password, this.password);
});

userSchema.method('getFullName', function () {
	let fullName = this.firstName + ' ' + this.lastName;
	return fullName;
});

const User = mongoose.model('User', userSchema);

export default User;