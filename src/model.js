
const fakeDB = require('./fakeDb');

const getUserById = async (id, dataBase = fakeDB) => {
  return dataBase.user.fetchById(id);
}

const addUser = async (userData, dataBase = fakeDB) => {
  return dataBase.user.insertAndFetch(userData);
}

module.exports = {
  getUserById,
  addUser
};