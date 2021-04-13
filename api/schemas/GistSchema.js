const mongoose = require('mongoose');

const AddGistSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subjects: {
    type: Array,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  githubLink: {
    type: String,
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('gists', AddGistSchema);
