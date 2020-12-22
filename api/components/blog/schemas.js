import { Schema, model } from 'mongoose';

const getBlog = {
  id: Number,
  name: String,
  metaDescription: String,
  metaSubjects: Array,
  seoCardUrl: String,
  content: String,
  likes: Number, //Coming soon
};

const getBlogs = [
  {
    id: Number,
    blogUrl: String,
    title: String,
    subTitle: String,
    cardUrl: String,
    subjects: Array,
  },
];

const createBlogSchema = new Schema({
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

export const createBlog = model('blogs', createBlogSchema);

const updateBlog = {
  id: Number,
  content: String,
};

const deleteBlog = {
  id: Number,
};
