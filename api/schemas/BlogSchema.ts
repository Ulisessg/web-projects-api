import mongoose from 'mongoose';

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
    required: true,
  },
  id: {
    type: Number,
    required: true,
  },
  language: {
    type: String,
    required: true,
  },
});

export default mongoose.model('blogs', CreateBlogSchema);
