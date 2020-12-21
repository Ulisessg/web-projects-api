//@ts-check
const mock = {
  blogs: [
    { number: 0 },
    { number: 1 },
    { number: 2 },
    { number: 3 },
    { number: 4 },
  ],
};

function findOne(collection, query) {
  return mock.blogs[0];
}

function findMany(collection, query) {
  return mock.blogs[1];
}

function insertOne(collection, document) {
  mock.blogs.push(document);
  return true;
}

function updateOne(collection, id, document) {
  return mock.blogs[3];
}

function deleteOne(collection, id) {
  return true;
}

export default { findOne, findMany, insertOne, updateOne, deleteOne };
