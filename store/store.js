//@ts-check
const db = require('mongoose');

//DB connection
const uri = process.env.URI;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('[DB] connected');
  })
  .catch((err) => {
    console.error(err);
  });

//CRUD
async function findOne(schema, query) {
  try {
    //Doesn't matter if the result is empty, network check if !result
    const result = await schema.findOne(query);
    return result;
  } catch (error) {
    return error;
  }
}

async function findMany(schema, query, projection) {
  try {
    const proj = {...projection, _id: 0, __v: 0}
    const result  = await schema.aggregate([{"$match": query}, {"$project": proj}])
    return result;
  } catch (err) {
    return err;
  }
}

async function insertOne(document) {
  try {
    await document.save();
    return 'Document created';
  } catch (error) {
    console.error(error);
    return error;
  }
}

async function updateOne(schema, query, data) {
  try {
    const response = await schema.updateOne(query, data)
    return response
  } catch (error) {
    return error
  }
}

function deleteOne(collection, id) {
  return true;
}

async function findLimitedDocuments (schema, query, projection, limit) {
  try {
    const proj = {...projection, _id: 0, __v: 0}
    // The filter is applied in controller
    const result = await schema.aggregate([{"$match": query}, {"$project": proj}, {"$sort": {"id": -1}}, {"$limit": limit}])
    return result
  } catch (error) {
    return error
  }
}

module.exports = { findOne, findMany, insertOne, updateOne, deleteOne, findLimitedDocuments };
