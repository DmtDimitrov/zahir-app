import User from '../models/User.js';
import { createToken } from './tokenService.js';

export async function register({ firstName, lastName, email, password }) {
    try {
        let user = await User.findOne({ email });

        if (user) {
            throw new Error('An account with this email already exist!');
        }
        return await User.create({ firstName, lastName, email, password });
    } catch (error) {
        throw new Error(error);
    }
};

export async function login({ email, password }) {

    try {
        let user = await User.findOne({ email });
  
        if (!user) {

            throw new Error('Invalid email');
        }

        let isValid = await user.validatePassword(password);

        if (!isValid) {
            throw new Error('Invalid password');

        }

        let { accessToken } = await createToken(user);

        return { user, accessToken };
    } catch (error) {
        throw new Error(error);
    }
};

