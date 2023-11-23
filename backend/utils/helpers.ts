import fs from "fs/promises";
import path from "path";
import multer from "multer";
export const readJsonFile = async (path: string) => {
  const data = await fs.readFile(path, "utf8");
  return JSON.parse(data);
};

export const readFilesInDir = async (path: string) => {
  const files = await fs.readdir(path);
  return files;
};

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "..", "images"));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

export const multerUpload = multer({
  storage,
});
