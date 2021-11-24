import mongoose from 'mongoose';

const commentSchema = mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Name is required!'],
	},
	subject: {
		type: String,
		required: [true, 'Subject is required!'],
	},
	text: {
		type: String,
		required: [true, 'Text is required!'],
		maxlength: [200, 'Text should be max 200 characters long'],
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



const Comment = mongoose.model('Comment', commentSchema);

export default Comment;