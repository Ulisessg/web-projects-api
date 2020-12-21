const COLLECTION = 'blogs';

export default (injectedStore) => {
  let store = injectedStore;
  if (!store) {
    store = import('../../../store/store.js');
  }

  function getBlog(id) {
    store.findOne(COLLECTION);
  }

  function createBlog(content) {
    store.insertOne(COLLECTION);
  }

  return { getBlog, createBlog };
};
