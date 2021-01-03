//@ts-check
const BlogSchema = require('../../schemas/BlogSchema.js');
const infoSchema = require('../../schemas/BlogInfo.js');

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

  async function getAllBlogs() {
    try {
      const blogs = await store.findMany(BlogSchema);
      return blogs;
    } catch (err) {
      return err;
    }
  }

  async function getAllBlogsInfo() {
    try {
      const infos = await store.findMany(infoSchema);
      return infos;
    } catch (error) {
      return error;
    }
  }

  async function getBlogInfo(query) {
    try {
      const result = await store.findOne(infoSchema, query);

      return result;
    } catch (error) {
      return error;
    }
  }

  async function createBlog(data) {
    try {
      const blog = {
        name: data.name,
        content: data.content,
      };
      const info = {
        name: data.name,
        title: data.title,
        metaDescription: data.metaDescription,
        metaSubjects: data.metaSubjects,
        seoCardUrl: data.seoCardUrl,
      };

      const blogDocument = new BlogSchema(blog);
      const infoDocument = new infoSchema(info);

      const blogResponse = await store.insertOne(blogDocument);
      const infoResponse = await store.insertOne(infoDocument);

      if (!blogResponse || !infoResponse) return false;

      return 'Blog created';
    } catch (error) {
      return error;
    }
  }

  return { createBlog, getBlog, getBlogInfo, getAllBlogs, getAllBlogsInfo };
};
