import express from 'express';
import AuthController from '../controllers/auth.controller';
let authRouter = express.Router();
let auth = new AuthController();

authRouter.get('/login', auth.login);

export default authRouter;
