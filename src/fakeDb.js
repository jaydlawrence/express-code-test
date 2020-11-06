const { uuid } = require('uuidv4');

const exampleUser = {
  id: '778a9c4e-eb7c-4430-af15-97716b237a48',
  name: "User Name",
  email: "email@email.com"
}


const fetchById = async (id) => {
  return new Promise( resolve => {
    setTimeout(() => {
      resolve({
        ...exampleUser,
        id
      });
    }, 300);
  });
}

const doesItFailThisTime = () => Math.floor(Math.random() * 100) < 50;  

const insertAndFetch = async (userData) => {
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      if (doesItFailThisTime()) {
        return reject('DB Error')
      }

      resolve({
        ...userData,
        id: uuid()
      });
    }, 300);
  });
}


module.exports = {
  user: {
    fetchById,
    insertAndFetch
  }
};