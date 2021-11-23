import mongoose from 'mongoose';

const recipeSchema = mongoose.Schema({
	title: {
		type: String,
		required: [true, 'Title is required!'],
	},
	category: {
		type: String,
		enum: ['Cake', 'Cream', 'Tart', 'Cupcake', 'Мuffin', 'Brownie'],
		required: [true, 'Type is required!'],
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
	comments: [
		{
			type: mongoose.Types.ObjectId,
			ref: 'Comment',
		},
	],
	ratings: {
		type: Number,
		default: 0,
	},
	createdAt: {
		type: Date,
		required: true,
		default: new Date(),
	},
});



const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
