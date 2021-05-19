"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateUserService_1 = __importDefault(require("@modules/user/services/CreateUserService"));
class UserController {
    async create(resquest, response) {
        const { email, password, enrollment, type } = resquest.body;
        const createUserService = tsyringe_1.container.resolve(CreateUserService_1.default);
        const UserService = await createUserService.execute({
            email,
            password,
            enrollment,
            type,
        });
        return response.json({ UserService });
    }
}
exports.default = UserController;
