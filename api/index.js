import express from 'express';
import { port } from '../config.js';
import { error, success } from '../network/responses.js';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', async (req, res) => {
  success(req, res, 200);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
