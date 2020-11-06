const {
  getUserById,
  addUser
} = require ('./model');


const mockReturnUser = {
  id: '778a9c4e-eb7c-4430-af15-97716b237a48',
  name: "User Name",
  email: "email@email.com"
}

const fetchById = jest.fn(() => mockReturnUser);

const insertAndFetch = jest.fn(() => mockReturnUser);

const mockDB = {
  user: {
    fetchById,
    insertAndFetch
  }
}

it("getUserById calls fetchById", async () => {
  const id = '0dcbc5f8-aee4-479b-9e00-d67cd9153aa2';
  const newUser = await getUserById(id, mockDB);
  // returns expected user
  expect(newUser).toEqual(mockReturnUser);
  // calls the mock DB function once
  expect(fetchById.mock.calls.length).toBe(1)
  expect(fetchById).toHaveBeenCalledWith(id);
});


it("addUser calls insertAndFetch", async () => {
  const user = {
    name: "User Name",
    email: "email@email.com"
  }
  const newUser = await addUser(user, mockDB);
  // returns expected user
  expect(newUser).toEqual(mockReturnUser);
  // calls the mock DB function once
  expect(insertAndFetch.mock.calls.length).toBe(1)
  expect(insertAndFetch).toHaveBeenCalledWith(user);
});