import * as jwt from '../utils/jwt.js';
import { TOKEN_SECRET } from '../constants/index.js';

export async function authMiddleware (req, res, next) {
	let token = req.headers['x-authorization'];

	console.log('AuthMiddleware token');
	console.log(token);

	if (token) {
		try {
			let verifiedToken = await jwt.verify(token, TOKEN_SECRET);
			req.user = verifiedToken;
			
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


// export async function authMiddleware(req, res, next) {
//     const token = req.headers['X-Authorization']
//     console.log('req.header: token');
//     console.log(token);
//     if (!token) {
//         res.status(401).json('Access Denied');
//     }

//     try {
//         let verifiedToken = await jwt.verify(token, TOKEN_SECRET);
//         req.user = verifiedToken;
//         next();
//     } catch (error) {
//         res.status(401).json('Invalid Token')
//     }
// };
