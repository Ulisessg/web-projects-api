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

const createBlog = {
  id: Number,
  name: String,
  metaDescription: String,
  metaSubjects: Array,
  seoCardUrl: String,
  content: String,
};

const updateBlog = {
  id: Number,
  content: String,
};

const deleteBlog = {
  id: Number,
};
