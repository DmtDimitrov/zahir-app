import * as jwt from '../utils/jwt.js';
import { TOKEN_SECRET } from '../constants/index.js';

export async function authMiddleware (req, res, next) {
	let token = req.headers['X-Authorization'];

	if (token) {
		try {
			let decodedToken = await jwt.verify(token, TOKEN_SECRET);
			req.user = decodedToken;
			
			next();
		} catch (error) {
			res.status(401).json('You are not authorized')
		}
	} else {
		next();
	}
};

export function isAuth (req, res, next) {
	if (req.user) {
		next();
	} else {
		res.status(401).json('You are not authorized')
	}
};
