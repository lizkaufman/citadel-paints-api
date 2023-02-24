"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const paints_1 = __importDefault(require("./routes/paints"));
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use("/", (req, res, next) => {
    console.log(`${req.method} ${req.originalUrl}`);
    next();
});
app.use("/paints", paints_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to the paints API! Send a GET request to /paints to start requesting paints data.");
});
app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at port ${port}`);
});
//TODO: In future iteration, have app.listen in a separate file for mocking/testing purposes.
