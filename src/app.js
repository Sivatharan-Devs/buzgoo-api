import express from 'express';
import morgan from 'morgan';
import busRouter from '../routes/busRoute.js';

const app = express();

// middlewares
app.use(express.json()); // to make body object available
console.log('NODE_ENV:', process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use('/api/v1/buses', busRouter);
export default app;
