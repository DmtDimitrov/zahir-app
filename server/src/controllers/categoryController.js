import express from 'express';

import * as categoryService from '../services/categoryService.js';

const router = express.Router();

router.get('/', async (req, res) => {

    console.log(req.body);

    try {
        let category = await categoryService.getAll();

        res.json(category);
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
    // let recipeId = '6191b1b8015eda7d3c742fd7'

    try {

        await categoryService.create({ ...req.body});

        res.json({ ok: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
})

export default router;