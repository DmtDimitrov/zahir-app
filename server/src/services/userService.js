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
    console.log('Server UserService email');
    console.log(email);
    console.log('Server UserService password');
    console.log(password);

    try {
        let user = await User.findOne({ email });
      
        if (!user) {

            throw new Error('Invalid email');

        }

        let isValid = await user.validatePassword(password);
        console.log('isValid');
        console.log(isValid);

        if (!isValid) {
            throw new Error('Invalid password');

        }

        let { accessToken, refreshToken } = await createToken(user);

        user.refreshToken = refreshToken;
        console.log(refreshToken);

        await user.save();

        return { user, accessToken, refreshToken };
    } catch (error) {
        throw new Error(error);
    }
};

