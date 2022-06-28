import express from 'express';
import { auth } from '../middlewares/auth';

const router = express.Router();

import { email, welcome } from '../controllers/index'

router.post('/email', email);

router.get('/welcome', auth, welcome);

export default router;
