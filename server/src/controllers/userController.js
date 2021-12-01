import express from 'express';

import * as userService from '../services/userService.js';

const router = express.Router();

router.post('/register', async (req, res) => {

    console.log('req.body');
    console.log(req.body);

    let { firstName, lastName, email, password, repeatPassword } = req.body;

    try {
        if (password !== repeatPassword) {
            throw new Error('Passwords do not match!');
        }
        let user = await userService.register({ firstName, lastName, email, password });
       
        // console.log('accessToken');
        // console.log(accessToken);

        // console.log('refreshToken');
        // console.log(refreshToken);
        // res.cookie(COOKIE_NAME, token, { httpOnly: true });
        // res.redirect('/');

        res.json({
            _id: user._id,
            email: user.email,
            // accessToken,
            // refreshToken,
        })
    } catch (error) {
        throw new Error(error);
    }

});

router.post('/login', async (req, res) => {
    let { email, password } = req.body;
   

    let { user, accessToken, refreshToken } = await userService.login({ email, password });
    console.log('user');
    console.log(user);
    console.log('accessToken');
    console.log(accessToken);

    res.json({
        _id: user._id,
        email: user.email,
        accessToken,
        refreshToken,
    })
});

router.get('/logout', (req, res) => {
    res.json({ ok: true });
});

export default router;