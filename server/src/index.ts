import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
});

app.listen(5000);
