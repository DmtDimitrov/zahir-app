import User from '../models/User.js';
import { createToken } from './tokenService.js';

export async function register({ firstName, lastName, email, password }) {
    try {
        return await User.create({ firstName, lastName, email, password });
    } catch (error) {
        throw new Error(error);
    }
};

export async function login({ email, password }) {

    try {
        let user = await User.findOne({ email });
        console.log('login user');
        console.log(user);
        if (!user) {
            throw 'Invalid email or password';
        }

        let isValid = await user.validatePassword(password);

        if (!isValid) {
            throw 'Invalid email or password';
        }

        let { accessToken, refreshToken } = await createToken(user);

        user.refreshToken = refreshToken;
       
        await user.save();

        return { user, accessToken, refreshToken };
    } catch (error) {
        throw error;
    }
};

