"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./routes"));
const logger_1 = __importDefault(require("./utils/logger"));
const app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
// Routes
app.use(routes_1.default);
// Error handling middleware
app.use((err, req, res, next) => {
    logger_1.default.error(err.stack);
    res.status(500).json({ message: 'Internal server error' });
});
exports.default = app;
