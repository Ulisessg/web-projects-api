const express = require('express');
const { error, success } = require('../../../network/responses.js');
const controller = require('./index.js');

const router = express.Router();

//  Get a blog

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

//  Get all blogs

router.get('/all-blogs', async (req, res) => {
  let query;

  const queryHasFields = Object.keys(req.body).length

  if(queryHasFields === 0){
    query = {}
  } else {
    query = req.body
  }

  controller
    .getAllBlogs(query)
    .then((response) => {
      if (!response) {
        error(req, res, 404, 'Blogs not found');
      }
      success(req, res, 200, response);
    })
    .catch((message) => {
      error(
        req,
        res,
        500,
        'Internal server error',
        'Error en mongodb o la api',
      );
    });
});

//  Get all blogs info

router.get('/all-info', async (req, res) => {
  let query;

  const queryHasFields = Object.keys(req.body).length

  if(queryHasFields === 0){
    query = {}
  } else {
    query = req.body
  }

  controller
    .getAllBlogsInfo(query)
    .then((response) => {
      if (!response) {
        error(req, res, 404, 'Infos not found');
      }
      success(req, res, 200, response);
    })
    .catch((message) => {
      error(req, res, 500, 'Internal server error', message);
    });
});

// Get info of a blog

router.get('/info', (req, res) => {
  const query = {
    name: req.query.name,
  };

  controller
    .getBlogInfo(query)
    .then((result) => {
      if (!result) {
        error(req, res, 404, 'Blog info not found');
      } else {
        success(req, res, 200, result);
      }
    })
    .catch((err) => {
      error(req, res, 500, 'Internal server error', err);
    });
});

//  Get last 10 entries

router.get('/last-entries', async (req, res) => {
  const limitSize = req.query.limit || 10
  controller.findLastBlogs(req.body, limitSize)
    .then((result) => {
      if(result.length === 0 || result.ok === 0){
        error(req, res, 404, 'Blogs not found', 'Check MongoDB status or limit value')
      } else {
        success(req, res, 200, result)
      }
    })
    .catch((err) => {
      error(req, res, 500, 'Internal server error', err)

    })
})

// CreateBlog
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
  controller
    .createBlog(req.body)
    .then((response) => {
      if(response === 'Error creating blog'){
        error(req, res, 500, response)
      } else {
        success(req, res, 201, response);
      }
    })
    .catch((err) => {
      error(req, res, 500, 'Error creating blog');
    });
});

router.post('/add-visit', async (req, res) => {
  const { blog_name } = req.body
  controller.add_visit(blog_name).then((response) => {
    if (response.error === true){
      error(req,res, 500, 'Internal server error')
    }else {
      success(req, res, 201, response)
    }
  }).catch(() => {
    error(req, res, 500, 'Internal server error')
  })
})

module.exports = router;
