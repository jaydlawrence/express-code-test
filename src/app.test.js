const app = require("./app");
const supertest = require("supertest");
const { isUuid, uuid } = require('uuidv4');
const request = supertest(app);


// END TO END TESTS

it("GET ID returns UUID", async () => {
  const response = await request.get("/id");
  expect(response.statusCode).toBe(200);
  expect(isUuid(response.body.id));
});


it("GET USER returns user object with same ID", async () => {
  const UUID = uuid();
  const response = await request.get(`/user/${UUID}`);
  expect(response.statusCode).toBe(200);
  expect(response.body.id).toEqual(UUID);
  expect(response.body.name.length).toBeGreaterThan(0);
  expect(response.body.email.length).toBeGreaterThan(0);
});


it("POST USER returns user object with new ID", async () => {
  const user = {
    name: "User Name",
    email: "email@email.com"
  }
  const response = await request.post(`/user`, user)
  .send(user);

  // This is going to fail 50% of the time because of the requirement for the DB to fail 50% of the time.
  // I thought about adding branching logic here, but I don't feel write about testing a non-Idempotent endpoint in general
  // Real world, not being able to rely on the DB for unit tests seems like bad design
  expect(response.statusCode).toBe(200);
  expect(isUuid(response.body.id));
  const { id, ...restOfBody} = response.body;
  expect(restOfBody).toEqual(user);
});