"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserController_1 = __importDefault(require("../controllers/UserController"));
const usersRouter = express_1.Router();
const userController = new UserController_1.default();
usersRouter.get('/', (request, response) => {
    return response.json({ message: 'Rota de users sacou' });
});
usersRouter.post('/', userController.create);
exports.default = usersRouter;
