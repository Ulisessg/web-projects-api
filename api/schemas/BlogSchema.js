const mongoose = require('mongoose');

const CreateBlogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  metaDescription: {
    type: String,
    required: true,
  },
  metaSubjects: {
    type: Array,
    required: true,
  },
  seoCardUrl: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('blogs', CreateBlogSchema);
