import db from 'mongoose';

// DB connection

const DB_TABLE = 'blogs';

const uri: string = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_URL}/${DB_TABLE}?retryWrites=true&w=majority`;

db.connect(<string>uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('[DB] connected');
  })
  .catch((err) => {
    console.error(err);
  });

//  CRUD
async function findOne(schema: any, query: any) {
  try {
    // Doesn't matter if the result is empty, network check if !result
    const result = await schema.findOne(query);
    return result;
  } catch (error) {
    return error;
  }
}

async function findMany(schema: any, query: any, projection: any) {
  try {
    const proj = { ...projection, _id: 0, __v: 0 };
    const result = await schema.aggregate([
      { $match: query },
      { $project: proj },
    ]);
    return result;
  } catch (err) {
    return err;
  }
}

async function insertOne(document: any) {
  try {
    await document.save();
    return 'Document created';
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function updateOne(schema: any, query: any, data: any) {
  try {
    const response = await schema.updateOne(query, data);
    return response;
  } catch (error) {
    return error;
  }
}

// eslint-disable-next-line max-len
async function findLimitedDocuments(schema: any, query: any, projection: any, limit: any, skip: any) {
  try {
    const proj = { ...projection, _id: 0, __v: 0 };
    // The filter is applied in controller
    const result = await schema
      .aggregate([
        { $match: query },
        { $project: proj },
        { $sort: { id: -1 } },
        { $limit: limit || 5 },
      ])
      .skip(skip);
    return result;
  } catch (error) {
    return error;
  }
}

export default {
  findOne,
  findMany,
  insertOne,
  updateOne,
  findLimitedDocuments,
};
