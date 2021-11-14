import express from 'express';
import cors from 'cors';
import { authMiddleware } from './middlewares/authMiddleware.js';

export function expressConfig(app) {
    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors());
    app.use(authMiddleware);
}