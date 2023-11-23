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
exports.multerUpload = exports.readFilesInDir = exports.readJsonFile = void 0;
const promises_1 = __importDefault(require("fs/promises"));
const path_1 = __importDefault(require("path"));
const multer_1 = __importDefault(require("multer"));
const readJsonFile = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield promises_1.default.readFile(path, "utf8");
    return JSON.parse(data);
});
exports.readJsonFile = readJsonFile;
const readFilesInDir = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield promises_1.default.readdir(path);
    return files;
});
exports.readFilesInDir = readFilesInDir;
// Multer config
const storage = multer_1.default.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path_1.default.join(__dirname, "..", "images"));
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path_1.default.extname(file.originalname));
    },
});
exports.multerUpload = (0, multer_1.default)({
    storage,
});
