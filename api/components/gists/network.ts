/* eslint-disable import/no-unresolved */
import express from 'express';
import controller from './index';
import { error, success } from '../../../network/responses';

const router = express.Router();

const { NODE_ENV, EMAIL, PASSWORD } = process.env;

router.post('/add-gist', async (req, res) => {
  if (req.body.email !== EMAIL || req.body.password !== PASSWORD) {
    res.status(500).json({
      error: true,
      message: 'Error creating gist',
    });
  } else {
    const gist = {
      subjects: req.body.subjects,
      image: req.body.image,
      description: req.body.description,
      githubLink: req.body.githubLink,
    };

    controller
      .addGist(gist)
      .then((response) => {
        if (
          response === 'Error adding gist :('
          || response === 'Error creating gist'
        ) {
          res.status(500).json({
            error: false,
            message: 'Error creating gist',
          });
        } else if (response === 'Gist created') {
          res.status(201).json({
            error: false,
            message: 'Gist Created',
          });
        }
      })

      .catch((response) => {
        if (NODE_ENV === 'development') {
          console.log(response);
          res.json({
            error: true,
            message: response,
          });
        } else if (NODE_ENV === 'production') {
          res.status(500).json({
            error: false,
            message: 'Error creating gist',
          });
        }
      });
  }
});

router.get('/', async (req, res) => {
  interface queryInterface {
    name?: string | undefined | any;
  }

  let query: queryInterface = {
    name: req.query.name,
  };
  const { skip } = req.query;
  const { limit } = req.query;

  if (typeof query.name === 'undefined') {
    query = {};
  }

  controller
    .getGists(query, skip, limit)
    .then((data) => {
      if (data.length === 0) {
        res.status(500).json({
          error: true,
          message: 'Error getting gists',
        });
      } else if (Object.values(data[0]).length > 0) {
        res.status(200).json({
          error: false,
          message: data,
        });
      }
    })
    .catch((err) => {
      if (NODE_ENV === 'development') {
        console.log(err);
        res.status(500).json({ error: true, message: 'Error getting gists' });
      } else {
        res.status(500).json({ error: true, message: 'Error getting gists' });
      }
    });
});

router.post('/add-like', async (req, res) => {
  const { name } = req.body;

  controller
    .addLike(name)
    .then((response: any) => {
      if (response.error === true) {
        error(req, res, 500, 'Internal server error');
      } else {
        success(req, res, 201, response);
      }
    })
    .catch(() => {
      error(req, res, 500, 'Internal server error');
    });
});

export default router;
