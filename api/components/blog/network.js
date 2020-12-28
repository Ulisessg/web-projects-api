import { Router } from 'express';
import { success, error } from '../../../network/responses.js';
import controller from './index.js';

import cors from 'cors';

const router = Router();
//router.use(cors());

router.get('/', async (req, res) => {
  const query = {
    name: req.query.name,
  };

  controller
    .getBlog(query)
    .then((result) => {
      //Check if the query returns null
      if (!result) {
        error(req, res, 404, 'Blog not found');
      } else {
        success(req, res, 200, result);
      }
    })
    .catch((err) => {
      //Get MongoDB problems
      error(req, res, 500, 'Internal Server Error', err);
    });
});

const whiteList = process.env.REMOTE_IP;

let corsOptions;

if (process.env.NODE_ENV === 'production') {
  corsOptions = {
    origin: function (origin, callback) {
      if (origin === whiteList) {
        callback(null, true);
      } else {
        callback('Not allowed by cors');
      }
    },
  };
} else {
  corsOptions = null;
}

console.log(corsOptions);

router.post('/', cors(corsOptions), async (req, res) => {
  controller
    .createBlog(req.body)
    .then((response) => {
      success(req, res, 201, response);
    })
    .catch((err) => {
      error(req, res, 500, 'Error creating blog');
      console.error(err);
    });
});

export default router;
