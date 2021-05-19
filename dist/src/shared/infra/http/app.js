"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("express-async-errors");
require("dotenv/config");
require("@shared/infra/typeorm");
require("@shared/container");
const express_1 = __importDefault(require("express"));
const AppError_1 = __importDefault(require("../../errors/AppError"));
const routes_1 = __importDefault(require("./routes"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.default);
app.use((error, request, response, _next) => {
    if (error instanceof AppError_1.default) {
        return response.status(error.statusCode).json({ message: error.message });
    }
    return response.status(500).json({
        type: 'error',
        message: 'Internal Server Error! ',
        error: error.message,
    });
});
exports.default = app;
