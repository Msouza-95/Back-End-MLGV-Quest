"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const AuthenticateUserService_1 = __importDefault(require("@modules/user/services/AuthenticateUserService"));
class AuthenticateUserController {
    async create(resquest, response) {
        const { password, email } = resquest.body;
        const authenticateUserService = tsyringe_1.container.resolve(AuthenticateUserService_1.default);
        const authenticateToken = await authenticateUserService.execute({
            password,
            email,
        });
        return response.json({ authenticateToken });
    }
}
exports.default = AuthenticateUserController;
