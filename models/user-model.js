const db = require("../database/dbConfig");

function findAll() {
  return db("users");
}

function findBy(filter) {
  return db("users").where(filter);
}

function add(user) {
  return db("users")
    .insert(user)
    .then(([id]) => {
      return findById(id);
    });
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function deleteById(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  findAll,
  findBy,
  add,
  findById,
  deleteById
};
