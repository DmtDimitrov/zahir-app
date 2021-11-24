import Category from '../models/Category.js';

export const getAll = () => Category.find();
export const create = (categoryData) => Category.create(categoryData);

