import { TOKEN_SECRET } from '../constants/index.js';
import * as jwt from '../utils/jwt.js';

export async function isAuth(req, res, next) {
    let token = req.headers['x-authorization'];
    console.log('req.header: token');
    console.log(token);
    if (!token) {
        return res.status(401).json('Access Denied');
    }

    try {
        let verifiedToken = await jwt.verify(token, TOKEN_SECRET);
        req.user = verifiedToken;
        return next();
    } catch (error) {
        return res.status(401).json('Invalid Token')
    }
};


// export async function authMiddleware (req, res, next) {
// 	let token = req.headers['x-authorization'];



// 	if (token) {
// 		try {
// 			let verifiedToken = await jwt.verify(token, TOKEN_SECRET);
// 			req.user = verifiedToken;

// 			next();
// 		} catch (error) {
// 			res.status(401).json('You are not authorized')
// 		}
// 	} else {
// 		next();
// 	}
// };