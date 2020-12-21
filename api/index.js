//@ts-check
import express from 'express';
import { port } from '../config.js';
import blog from './components/blog/network.js';

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/blog', blog);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
