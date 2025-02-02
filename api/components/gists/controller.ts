/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
import GistsSchema from '../../schemas/GistSchema';

export default function gistsController(injectedStore: any) {
  let store = injectedStore;
  if (!store) {
    store = require('../../../store/store');
  }

  async function addGist(data: any) {
    try {
      const filesCount = await GistsSchema.countDocuments();

      // eslint-disable-next-line no-param-reassign
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

  async function getGists(query = {}, skip: any, limit: any) {
    const limitParsed = parseInt(limit, 10);
    const skipParsed = parseInt(skip, 10);
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

  async function addLike(gistName: string) {
    try {
      const response = await store.updateOne(
        GistsSchema,
        { name: gistName },
        { $inc: { likes: 1 } },
      );

      if (Object.values(response)[1] === 'MongoError' || response.nModified === 0) {
        return { error: true };
      }
      return 'Like added';
    } catch (error) {
      return new Error('Error adding like');
    }
  }

  return { addGist, getGists, addLike };
}
