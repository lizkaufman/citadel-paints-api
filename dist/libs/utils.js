"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorMessage = void 0;
function sendErrorMessage(err) {
    return res.status(500).json({
        success: false,
        error: err.message,
    });
}
exports.sendErrorMessage = sendErrorMessage;
