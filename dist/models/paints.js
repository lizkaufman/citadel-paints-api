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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPaintById = exports.searchPaintsByColorGroup = exports.searchPaintsByType = exports.searchPaintsByName = exports.getAllPaints = void 0;
const data_1 = require("../db/data");
function getAllPaints() {
    return __awaiter(this, void 0, void 0, function* () {
        return data_1.paints;
    });
}
exports.getAllPaints = getAllPaints;
function searchPaintsByName(name) {
    return __awaiter(this, void 0, void 0, function* () {
        return data_1.paints.filter((paint) => paint.name.toLocaleLowerCase().includes(name.toLocaleLowerCase()));
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
//TODO: Sort this out when adding in the proper database rather reading from the file!
function getPaintById(id) {
    return __awaiter(this, void 0, void 0, function* () { });
}
exports.getPaintById = getPaintById;
