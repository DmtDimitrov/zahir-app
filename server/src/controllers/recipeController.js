import express from 'express';

import * as recipeService from '../services/recipeService.js';

const router = express.Router();

router.get('/', async (req, res) => {

    console.log(req.body);

   
    try {
        
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.post('/', async (req, res) => {
    
})

export default router;