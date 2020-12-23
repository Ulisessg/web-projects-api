import CreateBlogSchema from '../../schemas/CreateBlog.js';
const COLLECTION = 'blogs';

export default (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = import('../../../store/store.js');
  }

  function getBlog(id) {
    store.findOne(COLLECTION);
  }

  async function createBlog(data) {
    try {
      const document = new CreateBlogSchema(data);
      const response = store.insertOne(document);
      return response;
    } catch (error) {
      return error;
    }
  }

  return { getBlog, createBlog };
};
