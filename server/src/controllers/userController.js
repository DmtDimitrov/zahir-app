import express from 'express';

import * as userService from '../services/userService.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    try {
        let { firstName, lastName, email, password, repeatPassword } = req.body;

        if (password !== repeatPassword) {
            return res.status(400).json({ message: 'Passwords do not match!' })
            // throw new Error('Passwords do not match!');
        }

        let user = await userService.register({ firstName, lastName, email, password });

        res.status(201).json({
            _id: user._id,
            email: user.email,

        })
    } catch (error) {
        res.status(400).json({
            type: 'error',
            message: error.message
        })
    }

});

router.post('/login', async (req, res) => {
    try {
        let { email, password } = req.body;

        let { user, accessToken } = await userService.login({ email, password });

        if (accessToken) {
            res.header('access-token', accessToken);
        };

        res.status(200).json({
            _id: user._id,
            email: user.email,
            'accessToken': accessToken,
        })

    } catch (error) {
        res.status(400).json({
            type: 'error',
            message: error.message
        })
    }
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

router.get('/', async (req, res) => {

    try {
        let users = await userService.getAll();

        res.json(users);
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.get('/:chefId', async (req, res) => {
    try {

        let chef = await userService.getOne(req.params.chefId);

        let chefData = await chef.toObject();


        res.json({ ...chefData });

    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }
});

export default router;