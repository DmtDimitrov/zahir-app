import Recipe from '../models/Recipe.js';

export const getAll = () => Recipe.find();
export const getOne = (id) => Recipe.findById(id);
export const create = (recipeData) => Recipe.create(recipeData);
export const update = (id, recipeData) => Recipe.findByIdAndUpdate(id, recipeData);
export const deleteOne = (id) => Recipe.findByIdAndDelete(id);

