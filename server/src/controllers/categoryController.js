import express from 'express';

import * as categoryService from '../services/categoryService.js';

const router = express.Router();

router.get('/', async (req, res) => {

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