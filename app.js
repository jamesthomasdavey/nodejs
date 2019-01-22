const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
  console.log('bloop');
  setTimeout(next, 3000);
});

app.use('/add-product', (req, res, next) => {
  console.log('add-product');
});

app.use('/', (req, res, next) => {
  console.log('root route');
  res.send('<h1>Hello from express!</h1>');
});

app.listen(3000);
