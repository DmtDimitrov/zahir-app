import jwt from 'jsonwebtoken';
import util from 'util';

export const sign = util.promisify(jwt.sign);
export const verify = util.promisify(jwt.verify);