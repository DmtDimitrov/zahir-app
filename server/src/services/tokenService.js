import * as jwt from '../utils/jwt.js';
import { TOKEN_SECRET } from '../constants/index.js';

export async function createToken(user) {
    try {
		
		let payloadAccessToken = {
			_id: user._id,
			email: user.email,
		};

        let payloadRefreshToken = {
			_id: user._id,
		};

		let accessToken = await jwt.sign(payloadAccessToken, TOKEN_SECRET, { expiresIn: '1m' });
		let refreshToken = await jwt.sign(payloadRefreshToken, TOKEN_SECRET, { expiresIn: '17d' });

		return { accessToken, refreshToken };
    } catch (error) {
        throw error;
    }
};
