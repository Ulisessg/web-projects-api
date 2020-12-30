//ENV
require('dotenv').config();

//Dependencies
const express = require('express');
const blog = require('./components/blog/network.js');
const helmet = require('helmet');

const app = express();
const PORT = process.env.PORT || 3000;

//Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use('/api/blog', blog);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
