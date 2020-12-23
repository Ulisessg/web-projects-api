//@ts-check
import db from 'mongoose';

db.Promise = global.Promise;

const uri = process.env.URI;

db.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('[DB] connected');
  })
  .catch((err) => {
    console.error(err);
  });

function findOne(collection, query) {
  return;
}

function findMany(collection, query) {
  return;
}

function insertOne(collection, document) {
  return true;
}

function updateOne(collection, id, document) {
  return;
}

function deleteOne(collection, id) {
  return true;
}

export default { findOne, findMany, insertOne, updateOne, deleteOne };
