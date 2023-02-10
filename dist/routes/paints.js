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
const paintsRouter = express_1.default.Router();
paintsRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //search by paint name
    if (req.query.name !== undefined) {
        return res.json({
            success: true,
            payload: `search by paint name: ${req.query.name}`,
        });
    }
    //search by paint type
    if (req.query.type !== undefined) {
        return res.json({
            success: true,
            payload: `search by paint type: ${req.query.type}`,
        });
    }
    //search by color group
    if (req.query.colorGroup !== undefined) {
        return res.json({
            success: true,
            payload: `search by color group: ${req.query.colorGroup}`,
        });
    }
    //get all paints
    res.json({ success: true, payload: "all paints" });
}));
paintsRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //get paint by id
    res.json({ success: true, payload: `paint with id ${req.params.id}` });
}));
paintsRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //post new paint
    const newPaint = req.body;
    res.json({ success: true, payload: `post paint ${newPaint.name}` });
}));
paintsRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //update paint
    const updatedPaint = req.body;
    res.json({ success: true, payload: `update paint ${updatedPaint.name}` });
}));
paintsRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //delete paint
    res.json({ success: true, payload: `delete paint ${req.params.id}` });
}));
exports.default = paintsRouter;
