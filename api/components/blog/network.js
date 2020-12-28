import { Router } from 'express';
import { success, error } from '../../../network/responses.js';
import controller from './index.js';

const router = Router();

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

router.post('/', async (req, res) => {
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
