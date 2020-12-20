const mockData = {
  blogs: [
    { id: 1, data: 'SAMPLE TEXT' },
    { id: 2, data: 'SAMPLE TEXT' },
  ],
};

function getBlog(subject, title, id) {
  const blog = mockData.blogs.filter((blog) => {
    return blog.id === id;
  });

  return blog[0];
}

function getBlogs(initialNumber = 0, limit = 9) {
  return mockData.blogs;
}

function getBlogsBySubject(subject, initialNumber, limit) {
  return mockData.blogs;
}

function createBlog({
  name,
  metaDescription,
  metaSubjects,
  seoCardUrl,
  content,
}) {
  const blog = {
    name,
    metaDescription,
    metaSubjects,
    seoCardUrl,
    content,
  };

  mockData.blogs.push(blog);
  return true;
}

function updateBlog({ _id, content }) {
  mockData.blogs.push({ _id, content });
}

function deleteBlog(_id) {
  return true;
}

export {
  getBlog,
  getBlogs,
  getBlogsBySubject,
  createBlog,
  updateBlog,
  deleteBlog,
};
