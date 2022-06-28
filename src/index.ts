import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(express.json());

app.listen(process.env.BACKEND_PORT, () => {
    console.log(`Server has started on port ${process.env.BACKEND_PORT}`);
});