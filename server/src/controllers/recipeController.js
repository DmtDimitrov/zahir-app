import express from 'express';

import * as recipeService from '../services/recipeService.js';

const router = express.Router();

router.get('/', async (req, res) => {

    console.log(req.body);

    try {
        let recipe = await recipeService.getAll();
        res.json(recipe);
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.post('/', async (req, res) => {
    console.log('req.body');
    console.log(req.body);
    let userId = '6191b1b8015eda7d3c742fd7'
   
    try {
        
        await recipeService.create({...req.body, author: userId});
    
        res.json({ok: true});
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
})

export default router;