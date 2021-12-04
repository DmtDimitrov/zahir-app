import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
	name: String,
	unit: String,
	quantity: Number,
});

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
	ingredients: [
		ingredientSchema
	],
	method: {
		type: String,
		required: [true, 'Method is required!'],
	},
	image: {
		type: String,
		required: [true, 'Image is required!'],
		validate: [/^https?:\/\//i, 'Image should starts with http or https!'],
	},
	ownerId: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	likes: [
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
	createdAt: {
		type: Date,
		required: true,
		default: new Date(),
	},
});



const Recipe = mongoose.model('Recipe', recipeSchema);

export default Recipe;
