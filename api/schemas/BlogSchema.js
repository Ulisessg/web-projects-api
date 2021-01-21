const mongoose = require('mongoose');

const CreateBlogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  title: {
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
  visits: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('blogs', CreateBlogSchema);
