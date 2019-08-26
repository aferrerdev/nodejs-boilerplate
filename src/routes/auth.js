import express from 'express';
import authController from '../controllers/authController';
let router = express.Router();

router.get('/login', new authController().login);

export default router;
