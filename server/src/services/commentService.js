import Comment from '../models/Comment.js';
import Recipe from '../models/Recipe.js';


export const getAll = () => Comment.find();

export const create = async (commentData, userId) => {
    try {

        let createdComment = await Comment.create(commentData);

        let recipeId = createdComment.recipe;
        
        let recipeToUpdate = await Recipe.findOneAndUpdate(
            	{ _id: recipeId },
            	{
            		$push: { comments: createdComment._id },
            	},
            );
            console.log('Server recipeService user');
            console.log(usersRecipes);
    } catch (error) {
        throw new Error(error);
    }
};
