import Recipe from '../models/Recipe.js';

import User from '../models/User.js';

export const getAll = () => Recipe.find().populate('ownerId');
export const getMy = (ownerId) => Recipe.find({ ownerId: ownerId }).populate('ownerId');
export const getOne = (id) => Recipe.findById(id).populate('ownerId');
export const create = (recipeData) => Recipe.create(recipeData);
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

        console.log('Server recipeService: recipeId');
        console.log(recipeId);
        console.log('Server recipeService: userId');
        console.log(userId);

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

        console.log('Server recipeService: recipeId');
        console.log(recipeId);
        console.log('Server recipeService: recipeData');
        console.log(recipeData);

        let result = await Recipe.findByIdAndUpdate(recipeId, recipeData);
        console.log('Server recipeService: result');
        console.log(result);
return result;
     
    } catch (error) {
        throw new Error(error);
    }
};



