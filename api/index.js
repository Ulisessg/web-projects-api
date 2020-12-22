//@ts-check
//ENV
import { config } from 'dotenv';
config();

//Dependencies
import express from 'express';
import blog from './components/blog/network.js';

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/blog', blog);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
