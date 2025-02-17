const request = require("supertest");
const app = require("../server");

describe("Test the backend", () => {
  test("It should return a success message", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe("Backend is working!");
  });
});
