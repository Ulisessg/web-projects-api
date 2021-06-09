// @ts-check
const GistsSchema = require('../../schemas/GistSchema.js');

module.exports = function gistsController(injectedStore) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/store');
  }

  async function addGist(data) {
    try {
      const filesCount = await GistsSchema.countDocuments();

      data.id = filesCount + 1;

      const gist = new GistsSchema(data);
      const response = await store.insertOne(gist);

      if (response !== 'Document created') {
        return 'Error creating gist';
      }
      return 'Gist created';
    } catch (error) {
      return 'Error adding gist :(';
    }
  }

  async function getGists(query = {}, skip, limit) {
    const limitParsed = parseInt(limit);
    const skipParsed = parseInt(skip);
    try {
      const gists = await store.findLimitedDocuments(
        GistsSchema,
        query,
        {},
        limitParsed,
        skipParsed,
      );

      return gists;
    } catch (error) {
      return 'Error getting gists';
    }
  }

  return { addGist, getGists };
};
