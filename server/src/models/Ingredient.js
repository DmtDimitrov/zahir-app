import mongoose from 'mongoose';

const ingredientSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
	},
	unit: {
		type: String,
		required: [true, 'Unit is required!'],
	},
	quantity: {
		type: Number,
		required: [true, 'Quantity is required!'],
	},
    recipe: {
		type: mongoose.Types.ObjectId,
		ref: 'Recipe',
	},
});



const Ingredient = mongoose.model('Ingredient', ingredientSchema);

export default Ingredient;