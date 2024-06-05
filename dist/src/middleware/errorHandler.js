"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler = (err, req, res, next) => {
    var _a;
    const status = (_a = err.status) !== null && _a !== void 0 ? _a : 500;
    const message = err.message || "Internal Server Error";
    res.status(status).json({ error: message });
};
exports.default = errorHandler;
