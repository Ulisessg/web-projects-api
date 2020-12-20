import express from 'express';
import { port } from '../config.js';
const app = express();

app.use('/', async (req, res) => {
  res.send('Work');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
