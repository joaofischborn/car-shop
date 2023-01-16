import express from 'express';
import ErrorMiddleware from './Middlewares/errorMiddleware';
import Routes from './Routes/Routes';

const app = express();

app.use(express.json());
app.use(Routes);
app.use(ErrorMiddleware.handleError);

export default app;
