const express = require('express');
const { error, success } = require('../../../network/responses.js');
const controller = require('./index.js');

const router = express.Router();

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

console.log(process.env.NODE_ENV);

router.post('/', async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    error(
      req,
      res,
      401,
      'You are not allwed for this',
      'Testing this in production',
    );
  }
  /*controller
    .createBlog(req.body)
    .then((response) => {
      success(req, res, 201, response);
    })
    .catch((err) => {
      error(req, res, 500, 'Error creating blog');
      console.error(err);
    }); */
});

module.exports = router;
