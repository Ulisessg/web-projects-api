const express = require('express');
const { error, success } = require('../../../network/responses.js');
const controller = require('./index.js');

const cors = require('cors');

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

router.post('/', async (req, res) => {
  if (process.env.NODE_ENV === 'production') {
    error(
      req,
      res,
      401,
      'You are not allwed for this',
      'Testing this in production',
    );
  } else {
    controller
      .createBlog(req.body)
      .then((response) => {
        success(req, res, 201, response);
      })
      .catch((err) => {
        error(req, res, 500, 'Error creating blog');
        console.error(err);
      });
  }
});

module.exports = router;
