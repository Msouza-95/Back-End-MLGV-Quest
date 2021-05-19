"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthenticateUserController_1 = __importDefault(require("../controllers/AuthenticateUserController"));
const authenticateRoutes = express_1.Router();
const authenticateUserController = new AuthenticateUserController_1.default();
authenticateRoutes.post('/', authenticateUserController.create);
exports.default = authenticateRoutes;
