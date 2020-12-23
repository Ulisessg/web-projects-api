import mongoose from 'mongoose';

const UpdateBlog = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

export default mongoose.model('blogs', UpdateBlog);
