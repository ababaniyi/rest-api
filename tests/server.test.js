const app = require("../server");
const supertest = require("supertest");


test("POST /api/v1/parse", async () => {
  const data = { data: "JOHN0000MICHAEL0009994567" };

  await supertest(app).post("/api/v1/parse")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body.statusCode).toBe(200);
      expect(response.body.data.firstName).toBe("JOHN0000");
      expect(response.body.data.lastName).toBe("MICHAEL000");
      expect(response.body.data.clientId).toBe("9994567");
    });
});

test("POST /api/v2/parse", async () => {
  const data = { data: "JOHN0000MICHAEL0009994567" };

  await supertest(app).post("/api/v2/parse")
    .send(data)
    .expect(200)
    .then(async (response) => {
      // Check the response
      expect(response.body.statusCode).toBe(200);
      expect(response.body.data.firstName).toBe("JOHN");
      expect(response.body.data.lastName).toBe("MICHAEL");
      expect(response.body.data.clientId).toBe("9994567");
    });
});