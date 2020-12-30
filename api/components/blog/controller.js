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

  async function createBlog(data) {
    try {
      const document = new BlogSchema(data);
      const response = store.insertOne(document);
      return response;
    } catch (error) {
      return error;
    }
  }

  return { createBlog, getBlog };
};
