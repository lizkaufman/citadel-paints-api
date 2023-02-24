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
exports.deletePaint = exports.updatePaint = exports.addNewPaint = exports.getPaintById = exports.searchPaintsByColorGroup = exports.searchPaintsByType = exports.searchPaintsByName = exports.getAllPaints = void 0;
const PaintSchema_1 = __importDefault(require("../db/PaintSchema"));
//TODO: Refactor to use the function (err, docs) callback pattern!
function getAllPaints() {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.find({});
        return paintsData;
    });
}
exports.getAllPaints = getAllPaints;
function searchPaintsByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.find({
            name: { $regex: name, $options: "i" },
        });
        return paintsData;
    });
}
exports.searchPaintsByName = searchPaintsByName;
function searchPaintsByType(type) {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.find({
            type: { $regex: type, $options: "i" },
        });
        return paintsData;
    });
}
exports.searchPaintsByType = searchPaintsByType;
function searchPaintsByColorGroup(colorGroup) {
    return __awaiter(this, void 0, void 0, function* () {
        const paintsData = yield PaintSchema_1.default.find({
            colorGroup: { $regex: colorGroup, $options: "i" },
        });
        return paintsData;
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
function addNewPaint(paintToAdd) {
    return __awaiter(this, void 0, void 0, function* () {
        const newPaint = new PaintSchema_1.default(paintToAdd);
        yield newPaint.save();
        return newPaint;
    });
}
exports.addNewPaint = addNewPaint;
function updatePaint(id, updatedPaintInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const updatedPaint = yield PaintSchema_1.default.findByIdAndUpdate(id, updatedPaintInfo);
        return updatedPaint;
    });
}
exports.updatePaint = updatePaint;
function deletePaint(id) {
    return __awaiter(this, void 0, void 0, function* () {
        const deletedPaint = yield PaintSchema_1.default.findByIdAndDelete(id);
        return deletedPaint;
    });
}
exports.deletePaint = deletePaint;
