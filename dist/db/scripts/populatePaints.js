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
const __1 = require("..");
const data_1 = require("./data");
const PaintSchema_1 = __importDefault(require("../PaintSchema"));
function populatePaints() {
    return __awaiter(this, void 0, void 0, function* () {
        yield (0, __1.connectToDatabase)();
        const addedPaints = yield PaintSchema_1.default.insertMany(data_1.paints);
        console.log("added", addedPaints.length, "paints");
    });
}
populatePaints();
