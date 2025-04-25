import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import routes from './src/routes/userRouters.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 3001;

app.use(routes);

app.listen(PORT, () => {
    console.log (`Sever is running on port ${PORT}`);
});