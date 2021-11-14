const mongoose = require('mongoose');

const recipeSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required!'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		maxlength: [200, 'Description should be max 200 characters long'],
	},
	ingredient: {
		type: String,
		required: [true, 'Ingredient is required!'],
	},
	unit: {
		type: String,
		required: [true, 'Unit is required!'],
	},
	quantity: {
		type: Number,
		required: [true, 'Quantity is required!'],
	},
	method: {
		type: String,
		required: [true, 'Method is required!'],
	},
	createdAt: {
		type: String,
		required: [true, 'Date is required!'],
		maxlength: [10, 'Date should be 10 characters long'],
		minlength: [10, 'Date should be 10 characters long'],
	},
	image: {
		type: String,
		required: [true, 'Image is required!'],
		validate: [/^https?:\/\//i, 'Image should starts with http or https!'],
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	votes: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'User',
		},
	],
	ratings: {
		type: Number,
		default: 0,
	},
},
	{
		timestamps: true,
	}
);



const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;
