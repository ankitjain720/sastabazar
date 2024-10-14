import express from 'express';
import { userSignup, userLogin } from '../Controller/userController.js';

const router = express.Router();

router.post('/signup', userSignup)
router.get('/login', userLogin)



export default router;