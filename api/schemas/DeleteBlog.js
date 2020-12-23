import mongoose from 'mongoose';

const DeleteBlog = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
});
