const express = require('express');
const controller = require('./index.js');
const router = express.Router();

const { NODE_ENV } = process.env;

router.post('/add-gist', async (req, res) => {
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
        response === 'Error adding gist :(' ||
        response === 'Error creating gist'
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
});

module.exports = router;
