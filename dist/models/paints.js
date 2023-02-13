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
exports.addNewPaint = exports.getPaintById = exports.searchPaintsByColorGroup = exports.searchPaintsByType = exports.searchPaintsByName = exports.getAllPaints = void 0;
const data_1 = require("../db/data");
const PaintSchema_1 = __importDefault(require("../db/PaintSchema"));
function getAllPaints() {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.find({});
        return paintsData;
    });
}
exports.getAllPaints = getAllPaints;
//TODO: Refactor to allow multiple search queries in one request (e.g. name and type)
function searchPaintsByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        // return paints.filter((paint) =>
        //   paint.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
        // );
        const paintsData = yield PaintSchema_1.default.find({ name: /name/i });
        return paintsData;
    });
}
exports.searchPaintsByName = searchPaintsByName;
function searchPaintsByType(type) {
    return __awaiter(this, void 0, void 0, function* () {
        return data_1.paints.filter((paint) => paint.type.toLocaleLowerCase().includes(type.toLocaleLowerCase()));
    });
}
exports.searchPaintsByType = searchPaintsByType;
function searchPaintsByColorGroup(colorGroup) {
    return __awaiter(this, void 0, void 0, function* () {
        return data_1.paints.filter((paint) => paint.colorGroup
            .toLocaleLowerCase()
            .includes(colorGroup.toLocaleLowerCase()));
    });
}
exports.searchPaintsByColorGroup = searchPaintsByColorGroup;
function getPaintById(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.findById(id);
        return paintsData;
    });
}
exports.getPaintById = getPaintById;
function addNewPaint(newPaint) {
    return __awaiter(this, void 0, void 0, function* () {
        const paint = new PaintSchema_1.default(newPaint);
        yield paint.save();
        return paint;
    });
}
exports.addNewPaint = addNewPaint;
