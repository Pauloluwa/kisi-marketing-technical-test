"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const helpers_1 = require("./utils/helpers");
const PORT = 3018;
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: "*",
}));
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "images")));
app.get("/images", (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pathToArticles = path_1.default.join(__dirname, "..", "data", "articles.json");
        const pathToImages = path_1.default.join(__dirname, "..", "dist", "images");
        const articles = yield (0, helpers_1.readJsonFile)(pathToArticles);
        const imgFiles = yield (0, helpers_1.readFilesInDir)(pathToImages);
        const imageInArticle = yield Promise.all(imgFiles.map((image) => __awaiter(void 0, void 0, void 0, function* () {
            const articleIdx = Math.floor(Math.random() * articles.length);
            const article = articles[articleIdx];
            return {
                image,
                article,
            };
        })));
        res.status(200).json(imageInArticle);
    }
    catch (err) {
        console.log(err);
    }
}));
app.post("/images", helpers_1.multerUpload.single("image"), (_, res) => {
    try {
        res.status(201).json({ message: "Image uploaded successfully" });
    }
    catch (err) {
        console.log(err);
    }
});
app.listen(PORT, () => console.log(`Sever listening on port ${PORT}`));
exports.default = app;
