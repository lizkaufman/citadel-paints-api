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
const index_1 = require("../db/index");
(0, index_1.connectToDatabase)();
const editRouter = express_1.default.Router();
editRouter.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let data = null;
    //search by paint name
    if (req.query.name !== undefined) {
        try {
            data = yield searchPaintsByName(req.query.name);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
            });
        }
        return res.json({
            success: true,
            message: `search by paint name: ${req.query.name}`,
            payload: data,
        });
    }
    //search by paint type
    if (req.query.type !== undefined) {
        try {
            data = yield searchPaintsByType(req.query.type);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
            });
        }
        return res.json({
            success: true,
            message: `search by paint type: ${req.query.type}`,
            payload: data,
        });
    }
    //search by color group
    if (req.query.colorGroup !== undefined) {
        try {
            data = yield searchPaintsByColorGroup(req.query.colorGroup);
        }
        catch (err) {
            return res.status(500).json({
                success: false,
                error: err.message,
            });
        }
        return res.json({
            success: true,
            message: `search by color group: ${req.query.colorGroup}`,
            payload: data,
        });
    }
    //get all paints
    try {
        data = yield getAllPaints();
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
    res.json({ success: true, message: "all paints", payload: data });
}));
//get paint by id
editRouter.get("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let data = null;
    try {
        data = yield getPaintById(id);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
    res.json({
        success: true,
        message: `paint with id ${req.params.id}`,
        payload: data,
    });
}));
//post new paint
editRouter.post("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newPaint = req.body;
    let data = null;
    try {
        data = yield (0, paints_1.addNewPaint)(newPaint);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
    res.status(201).json({
        success: true,
        message: `post paint ${newPaint.name}`,
        payload: data,
    });
}));
//update paint
editRouter.patch("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const updatedPaintInfo = req.body;
    const { id } = req.params;
    let data = null;
    try {
        data = yield (0, paints_1.updatePaint)(id, updatedPaintInfo);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
    res.status(201).json({
        success: true,
        message: `updated paint ${updatedPaintInfo.name}`,
        payload: data,
    });
}));
//delete paint
editRouter.delete("/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    let data = null;
    try {
        data = yield (0, paints_1.deletePaint)(id);
    }
    catch (err) {
        return res.status(500).json({
            success: false,
            error: err.message,
        });
    }
    res.json({
        success: true,
        message: `delete paint ${req.params.id}`,
        payload: data,
    });
}));
exports.default = editRouter;
