import express from 'express';
import busRouter from '../routes/busRoute.js';

const app = express();

// middlewares
app.use(express.json()); // to make body object available

app.use('/api/v1/buses', busRouter);
export default app;
