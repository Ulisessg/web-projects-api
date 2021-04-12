const mongoose = require('mongoose');

const AddGistSchema = new mongoose.Schema({
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
});

module.exports = mongoose.model('gists', AddGistSchema);
