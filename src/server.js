import './config.js';
import mongoose from 'mongoose';
import app from './app.js';

const port = process.env.PORT || 3000;

const DB = process.env.DB_CONNECTION_STRING.replace('<APP_NAME>', process.env.APP_NAME)
  .replace('<DB_USERNAME>', process.env.DB_USERNAME)
  .replace('<DB_PASSWORD>', process.env.DB_PASSWORD);
mongoose.connect(DB).then(() => console.log('DB connected successfully 🎉'));

app.listen(port, () => {
  console.log('Hello 👋 From BuzGoo 🚌 ..');
});
