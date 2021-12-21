import { HOST } from "../constants";
import * as request from './requestService';

export const getAll = async () => await request.get(`${HOST}/comments`);
export const create = async (commentData) => await request.post(`${HOST}/comments`, commentData, true);

