import request from "supertest";
import app from "./index";

describe("Article and Image API", () => {
  it("GET /images", async () => {
    const res = await request(app).get("/images");
    expect(res.status).toBe(200);
  });

  it("POST /images", async () => {
    const res = await request(app).post("/images");
    expect(res.status).toBe(201);
  });
});
