const db = require("../database/dbConfig");
const Users = require("./user-model");

beforeEach(async () => {
  await db("users").truncate();
});

describe("Users model", () => {
  describe("adding a new user", () => {
    it("inserts users into the db", async () => {
      await Users.add({ username: "darragh", password: "pass" });
      await Users.add({ username: "patrick", password: "pass" });
      const users = await db("users");

      expect(users).toHaveLength(2);
    });
  });

  it("inserts the users without breaking them", async () => {
    const user = await Users.add({ username: "darragh", password: "pass" });
    expect(user).toMatchObject({ username: "darragh", password: "pass" });
  });

  //   it('can find a hobbit in the db', async () => {
  //       await
  //   })
});
