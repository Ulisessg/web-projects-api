// ENV
require('dotenv').config();

// Dependencies
const express = require('express');
const helmet = require('helmet');
const blog = require('./components/blog/network.js');
const gists = require('./components/gists/network.js');

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api/blog', blog);
app.use('/api/gist', gists);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
