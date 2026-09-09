import './config.js';
import app from './app.js';

const port = process.env.PORT || 3000;

app.route('/').get((req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: 'Hello From root route 😀',
    });
  } catch (err) {
    res.status(404).json({
      status: 'page not found',
      message: err.message,
    });
  }
});

app.listen(port, () => {
  console.log('Hello 👋 From BuzGoo 🚌 ..');
});
