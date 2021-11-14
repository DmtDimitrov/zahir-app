import mongoose from 'mongoose';

import { DB_URI } from '../constants/index.js';

export function databaseConfig() {
	return mongoose.connect(DB_URI);
};