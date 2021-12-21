import express from 'express';

import * as recipeService from '../services/recipeService.js';
import { isAuth } from '../routes/guards.js';

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        let recipes = await recipeService.getAll();

        res.json(recipes);
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.get('/my-recipes', isAuth, async (req, res) => {

    try {
        let userId = req?.user._id;
       
        let recipes = await recipeService.getMy(userId);

        res.json(recipes);
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.get('/:recipeId', async (req, res) => {
    try {

        let recipe = await recipeService.getOne(req.params.recipeId);

        let recipeData = await recipe.toObject();

        res.json({ ...recipeData });

    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});

router.post('/', isAuth, async (req, res) => {

    

    let userId = req?.user._id;

    try {

        await recipeService.create({ ...req.body, ownerId: userId }, userId);

        res.json({ created: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});


router.delete('/:recipeId', async (req, res) => {
    try {

        await recipeService.deleteOne(req.params.recipeId);

        res.json({ deleted: true });

    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});

router.patch('/:recipeId/like', isAuth, async (req, res) => {

    let userId = req?.user._id;
    let recipeId = req.params.recipeId;

    try {
        let likedRecipe = await recipeService.like(recipeId, userId);
 
        res.json({ ...likedRecipe });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});



router.put('/:recipeId', isAuth, async (req, res) => {


    let recipeId = req.params.recipeId;

    try {
        let editedRecipe = await recipeService.edit(recipeId, req.body);

        res.json({ edited: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});

export default router;