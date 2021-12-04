import * as jwt from '../utils/jwt.js';
import { TOKEN_SECRET } from '../constants/index.js';
import { response } from 'express';

export async function createToken(user) {
	try {

		let payloadAccessToken = {
			_id: user._id,
			email: user.email,
		};

		let accessToken = await jwt.sign(payloadAccessToken, TOKEN_SECRET, { expiresIn: '2h' });
		
		return { accessToken };
	} catch (error) {
		throw error;
	}
};
