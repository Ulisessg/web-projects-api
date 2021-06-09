/* eslint-disable import/no-unresolved */
// ENV
// Dependencies
import express from 'express';

import * as dotenv from 'dotenv';
import { join } from 'path';

import helmet from 'helmet';
import blog from './components/blog/network';
import gists from './components/gists/network';

dotenv.config({ path: join(__dirname, '..', '.env') });

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
