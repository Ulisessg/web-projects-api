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

async function findMany(schema, query) {
  try {
    const result  = schema.aggregate([{"$match": query}, {"$project": {_id: 0, __v: 0}}])
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

function updateOne(schema, document) {
  return;
}

function deleteOne(collection, id) {
  return true;
}

module.exports = { findOne, findMany, insertOne, updateOne, deleteOne };
