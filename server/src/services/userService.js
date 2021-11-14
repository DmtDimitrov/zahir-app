import User from '../models/User.js';
import { createToken } from './tokenService.js';

export async function register(userData) {
    try {
        await User.create(userData);
    } catch (error) {
        throw error;
    }
};

export async function login({ email, password }) {
   
    try {
        let user = await User.findOne({ email });

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

