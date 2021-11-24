import express from 'express';

import userController from '../controllers/userController.js';
import recipeController from '../controllers/recipeController.js';
import categoryController from '../controllers/categoryController.js';

const router = express.Router();

router.use('/users', userController);
router.use('/recipes', recipeController);
router.use('/category', categoryController);

export default router;