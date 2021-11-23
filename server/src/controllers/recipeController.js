import express from 'express';

import * as recipeService from '../services/recipeService.js';

const router = express.Router();

router.get('/', async (req, res) => {

    console.log(req.body);

    try {
        let recipes = await recipeService.getAll();

        recipes.map(x => console.log(x.author._id));

        console.log('recipes');
        console.log(recipes);



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
        // console.log(req.params.recipeId);
        let recipe = await recipeService.getOne(req.params.recipeId);
    
        let recipeData = await recipe.toObject();
        
        res.json({...recipeData});
        
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        }) 
    }
})

router.post('/', async (req, res) => {
    console.log('req.body');
    console.log(req.body);
    let userId = '6191b1b8015eda7d3c742fd7'

    try {

        await recipeService.create({ ...req.body, author: userId });

        res.json({ ok: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
})

export default router;