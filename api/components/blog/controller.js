//@ts-check
const BlogSchema = require('../../schemas/BlogSchema.js');

module.exports = (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = import('../../../store/store.js');
  }
  async function getBlog(query) {
    try {
      const result = await store.findOne(BlogSchema, query);

      return result;
    } catch (error) {
      return error;
    }
  }

  async function getAllBlogs(query) {
    try {
      const blogs = await store.findMany(BlogSchema, query);
      return blogs;
    } catch (err) {
      return err;
    }
  }

  async function getAllBlogsInfo() {
    try {
      const infos = await store.findMany(BlogSchema);
      return infos;
    } catch (error) {
      return error;
    }
  }

  async function getBlogInfo(query) {
    try {
      const result = await store.findOne(BlogSchema, query);

      return result;
    } catch (error) {
      return error;
    }
  }

  async function createBlog(data) {
    try {
      // Get how many blog are, and set the id adding 1
      const totalBlogs = await BlogSchema.countDocuments()

      const blog = {
        name: data.name,
        content: data.content,
        title: data.title,
        metaDescription: data.metaDescription,
        metaSubjects: data.metaSubjects,
        seoCardUrl: data.seoCardUrl,
        // Visits setted to 0 by default
        visits: 0,
        id: totalBlogs + 1
      };

      const blogDocument = new BlogSchema(blog);

      const blogResponse = await store.insertOne(blogDocument);

      if(blogResponse !== 'Document created'){
        return 'Error creating blog'
      } else {
        return 'Blog created';
      }
      

    } catch (error) {
      return error;
    }
  }

  return { createBlog, getBlog, getBlogInfo, getAllBlogs, getAllBlogsInfo };
};
