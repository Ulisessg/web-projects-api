//@ts-check
const GistsSchema = require('../../schemas/GistSchema.js');

module.exports = function gistsController(injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/store');
  }

  async function addGist(data) {
    try {
      const gist = new GistsSchema(data);
      const response = await store.insertOne(gist);

      if (response !== 'Document created') {
        return 'Error creating gist';
      } else {
        return 'Gist created';
      }
    } catch (error) {
      return 'Error adding gist :(';
    }
  }

  return { addGist };
};
