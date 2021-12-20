import mongoose from 'mongoose';

const categorySchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
	},
	recipes: {
		type: mongoose.Types.ObjectId,
		ref: 'Recipe',
	},
});



const Category = mongoose.model('Category', categorySchema);

export default Category;