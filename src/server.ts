import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import { LoggerMiddleware } from './middlewares/logger';

import router from './routes/index'

dotenv.config();

const app = express();

app.use(LoggerMiddleware);
app.use(express.json());
app.use(cookieParser());

app.use(router);

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server has started on port ${process.env.BACKEND_PORT}`);
});