//@ts-check
import db from 'mongoose';

db.Promise = global.Promise;

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
function findOne(collection, query) {
  return;
}

function findMany(collection, query) {
  return;
}

async function insertOne(document) {
  try {
    await document.save();
    return 'Blog created';
  } catch (error) {
    console.error(error);
    return 'Error creating blog';
  }
}

function updateOne(collection, id, document) {
  return;
}

function deleteOne(collection, id) {
  return true;
}

export default { findOne, findMany, insertOne, updateOne, deleteOne };
