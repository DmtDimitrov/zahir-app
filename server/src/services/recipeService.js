import Recipe from '../models/Recipe.js';
import Category from '../models/Category.js';
import User from '../models/User.js';

export const getAll = () => Recipe.find().populate('ownerId');
export const getMy = (ownerId) => Recipe.find({ ownerId: ownerId }).populate('ownerId');
// export const getOne = (id) => Recipe.findById(id).populate('ownerId').populate('comments');
export const getOne = (id) => {
    return Recipe
        .findById(id)
        .populate('ownerId')
        .populate({
            path: 'comments',
            populate: {
                path: 'author',
                model: 'User'
            }
        })
};
export const create = async (recipeData, userId) => {
    try {

        let createdRecipe = await Recipe.create(recipeData);

        let recipeId = createdRecipe._id;

        let categoryToUpdate = await Category.findOneAndUpdate(
            { name: createdRecipe.category },
            {
                $push: { recipes: recipeId },
            },
        );


        let usersRecipes = await User.findOneAndUpdate(
            { _id: userId },
            {
                $push: { recipes: recipeId },
            },
        );
        console.log('Server recipeService user');
        console.log(usersRecipes);
    } catch (error) {
        throw new Error(error);
    }
};
export const update = (recipeId, recipeData) => Recipe.findByIdAndUpdate(recipeId, recipeData);
export const deleteOne = (id) => Recipe.findByIdAndDelete(id);
export const getAuthor = async (id) => {
    try {
        let author = await User.findById(id);
        let fullName = author.getFullName();
        return fullName;
    } catch (error) {
        throw new Error(error);
    }
};


export const like = async (recipeId, userId) => {
    try {

        let likedRecipe = await Recipe.findOneAndUpdate(
            { _id: recipeId },
            {
                $push: { likes: userId },
            },
        );
        console.log('Server recipeServicelikedRecipe');
        console.log(likedRecipe);
    } catch (error) {
        throw new Error(error);
    }
};

export const edit = async (recipeId, recipeData) => {
    try {



        let result = await Recipe.findByIdAndUpdate(recipeId, recipeData);

        return result;

    } catch (error) {
        throw new Error(error);
    }
};
