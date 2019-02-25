const express = require('express');
const main = require('./src')

const app = express();
const router = express.Router();

const PORT = 8080;
const HOST = "localhost";

app.get('/', (req, res) => {
  res.send('Welcome to Express');
});

app.use('/main', main);

app.listen(PORT, () => {
  console.log(`Express server started on http://${HOST}:${PORT}`);
});