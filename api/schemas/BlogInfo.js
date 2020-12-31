//@ts-check

const mongoose = require('mongoose');

const BlogInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
  },
  metaSubjects: {
    type: Array,
    required: true,
  },
  seoCardUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('blog-info', BlogInfoSchema);
