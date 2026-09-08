import express from 'express';

const app = express();

// middlewares
app.use(express.json()); // to make body object available

export default app;
