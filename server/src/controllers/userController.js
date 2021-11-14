import express from 'express';

import * as userService from '../services/userService.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    console.log(req.body);

    let { firtName, lastName, email, password, repeatPassword } = reg.body;

    try {
        if (password !== repeatPassword) {
            throw 'Passwords do not match!';
        }
        let user = await userService.register({ firtName, lastName, email, password });
        let token = await authService.login({ email, password });

        res.cookie(COOKIE_NAME, token, { httpOnly: true });
        res.redirect('/');

        res.json({
            _id: user._id,
            email: user.email,
            accesToken: token,
        })
    } catch (error) {
        res.json({
            type: 'error',
            message: error.message
        })
    }

});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;

    let { user, accessToken, refreshToken } = await userService.login((email, password));

    res.json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken,
    })
})

export default router;