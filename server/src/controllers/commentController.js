import express from 'express';

import { isAuth } from '../routes/guards.js';

import * as commentService from '../services/commentService.js';

const router = express.Router();

router.get('/', async (req, res) => {

    try {
        let category = await commentService.getAll();

        res.json(category);
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
        await commentService.create({ ...req.body, author: userId }, userId);

        res.json({ ok: true });
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
})

export default router;