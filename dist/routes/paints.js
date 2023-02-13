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
const paints_1 = require("../models/paints");
const mongoose_1 = __importDefault(require("mongoose"));
mongoose_1.default.set("strictQuery", false);
mongoose_1.default.connect(process.env.MONGODB_CONNECTION_STRING);
const db = mongoose_1.default.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});
const paintsRouter = express_1.default.Router();
paintsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.path);
    //search by paint name
    if (req.query.name !== undefined) {
        const data = yield (0, paints_1.searchPaintsByName)(req.query.name);
        res.json({
            success: true,
            message: `search by paint name: ${req.query.name}`,
            payload: data,
        });
        return;
    }
    //search by paint type
    if (req.query.type !== undefined) {
        const data = yield (0, paints_1.searchPaintsByType)(req.query.type);
        res.json({
            success: true,
            message: `search by paint type: ${req.query.type}`,
            payload: data,
        });
        return;
    }
    //search by color group
    if (req.query.colorGroup !== undefined) {
        const data = yield (0, paints_1.searchPaintsByColorGroup)(req.query.colorGroup);
        res.json({
            success: true,
            message: `search by color group: ${req.query.colorGroup}`,
            payload: data,
        });
        return;
    }
    //get all paints
    const data = yield (0, paints_1.getAllPaints)();
    res.json({ success: true, message: "all paints", payload: data });
}));
paintsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get paint by id
    const { id } = req.params;
    const data = yield (0, paints_1.getPaintById)(id);
    res.json({
        success: true,
        message: `paint with id ${req.params.id}`,
        payload: data,
    });
}));
paintsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //post new paint
    const newPaint = req.body;
    let data = null;
    try {
        data = yield (0, paints_1.addNewPaint)(newPaint);
    }
    catch (err) {
        res.status(500).json({
            success: false,
            error: err,
        });
    }
    res.status(201).json({
        success: true,
        message: `post paint ${newPaint.name}`,
        payload: data,
    });
}));
// paintsRouter.patch("/:id", async (req: Request, res: Response) => {
//   //update paint
//   const updatedPaint: Paint = req.body;
//   res.json({ success: true, payload: `update paint ${updatedPaint.name}` });
// });
// paintsRouter.delete("/:id", async (req: Request, res: Response) => {
//   //delete paint
//   res.json({ success: true, payload: `delete paint ${req.params.id}` });
// });
exports.default = paintsRouter;
