"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToDatabase = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
function connectToDatabase() {
    mongoose_1.default.set("strictQuery", false);
    mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING);
    const db = mongoose_1.default.connection;
    db.on("error", console.error.bind(console, "connection error: "));
    db.once("open", function () {
        console.log("Connected to database successfully");
    });
}
exports.connectToDatabase = connectToDatabase;
