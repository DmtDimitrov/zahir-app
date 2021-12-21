import express from 'express';

import userController from '../controllers/userController.js';
import recipeController from '../controllers/recipeController.js';
import categoryController from '../controllers/categoryController.js';
import commentController from '../controllers/commentController.js';

const router = express.Router();

router.use('/users', userController);
router.use('/recipes', recipeController);
router.use('/category', categoryController);
router.use('/comments', commentController);

export default router;