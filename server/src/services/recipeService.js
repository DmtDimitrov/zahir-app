import Recipe from '../models/Recipe.js';

import User from '../models/User.js';

export const getAll = () => Recipe.find().populate('ownerId');
export const getOne = (id) => Recipe.findById(id).populate('ownerId');
export const create = (recipeData) => Recipe.create(recipeData);
export const update = (id, recipeData) => Recipe.findByIdAndUpdate(id, recipeData);
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
