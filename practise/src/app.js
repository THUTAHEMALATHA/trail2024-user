import express from 'express';
import usersRoutes from './routes/users.routes.js';
import { errorHandler } from './middlewares/error.middleware.js';

const app = express();

app.use(express.json());
app.use('/users', usersRoutes);
app.use(errorHandler);

export default app;
