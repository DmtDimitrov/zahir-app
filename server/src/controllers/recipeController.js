import express from 'express';

import * as recipeService from '../services/recipeService.js';
import { isAuth } from '../routes/guards.js';

const router = express.Router();

router.get('/', async (req, res) => {



    try {
        let recipes = await recipeService.getAll();

        // recipes.map(x => console.log(x.author._id));




        // let newRecipes = recipes.map(x => {

        //     let authorFullName = recipeService.getAuthor(x.author._id);
        //     console.log(authorFullName);
        //     x.authorFullName = authorFullName;
        // });



        // await recipes.map(x => {
        //     let recipeService.getAuthor(x.author)
        //     console.log(x)
        // });

        // console.log('recipesData');
        // console.log(recipesData);
        // let recipeData = await recipe.toObject();

        // let fullName = await recipeService.getAuthor(recipeData.author);

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

    console.log('req.user')

    console.log(req?.user)
    // console.log('req.body');
    // console.log(req.body);
    // console.log('req.user');
    // console.log(req?.user);

    let userId = req?.user._id;

    try {

        await recipeService.create({ ...req.body, ownerId: userId });

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

router.patch('/:recipeId', isAuth, async (req, res) => {

    let userId = req?.user._id;
    let recipeId = req.params.recipeId;
    console.log('recipeId');
    console.log(recipeId);
    console.log('userId');
    console.log(userId);

    try {
        await recipeService.like(recipeId, userId);

        res.json({ ok: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
})

export default router;