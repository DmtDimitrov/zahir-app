import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
	subject: {
		type: String,
		required: [true, 'Subject is required!'],
	},
	message: {
		type: String,
		required: [true, 'message is required!'],
		maxlength: [200, 'message should be max 200 characters long'],
	},
	recipe: {
		type: mongoose.Types.ObjectId,
		ref: 'Recipe',
	},
	author: {
		type: mongoose.Types.ObjectId,
		ref: 'User',
	},
	createdAt: {
		type: Date,
		required: true,
		default: new Date(),
	},
});



const Comment = mongoose.model('Comment', commentSchema);

export default Comment;