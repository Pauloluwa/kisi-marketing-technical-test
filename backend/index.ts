import express, { Response } from "express";
import path from "path";
import fs from "fs";
import cors from "cors";
import { multerUpload, readFilesInDir, readJsonFile } from "./utils/helpers";

const PORT = process.env.NODE === "Production" ? 80 : 3018;

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use("/images", express.static(path.join(__dirname, "images")));

app.get("/images", async (_, res: Response) => {
  try {
    const pathToArticles = path.join(__dirname, "..", "data", "articles.json");
    const pathToImages = path.join(__dirname, "..", "dist", "images");

    const articles = await readJsonFile(pathToArticles);
    const imgFiles = await readFilesInDir(pathToImages);

    const imageInArticle = await Promise.all(
      imgFiles.map(async (image) => {
        const articleIdx = Math.floor(Math.random() * articles.length);
        const article = articles[articleIdx];
        return {
          image,
          article,
        };
      })
    );

    res.status(200).json(imageInArticle);
  } catch (err) {
    console.log(err);
  }
});

app.post("/images", multerUpload.single("image"), (_, res: Response) => {
  try {
    res.status(201).json({ message: "Image uploaded successfully" });
  } catch (err) {
    console.log(err);
  }
});

app.listen(PORT, "0.0.0.0", () =>
  console.log(`Sever listening on port ${PORT}`)
);

export default app;
