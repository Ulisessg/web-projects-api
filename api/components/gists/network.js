const express = require('express');
const controller = require('./index.js');
const router = express.Router();
const cors = require('cors');

const { NODE_ENV, EMAIL, PASSWORD } = process.env;

const corsOptions = {
  origin: NODE_ENV === 'production' ? 'https://ulisessg.com/' : '*',
  methods: 'POST',
};

router.post('/add-gist', cors(corsOptions), async (req, res) => {
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
  }
});

router.get('/', async (req, res) => {
  const query = {};
  controller
    .getGists(query)
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

module.exports = router;
