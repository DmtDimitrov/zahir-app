import express from 'express';

import userController from '../controllers/userController.js';
import recipeController from '../controllers/recipeController.js';

const router = express.Router();

router.use('/users', userController);
router.use('/recipes', recipeController);

export default router;