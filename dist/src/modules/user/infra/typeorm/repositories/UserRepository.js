"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = __importDefault(require("../entities/User"));
class UserRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(User_1.default);
    }
    async create(data) {
        const newUser = this.ormRepository.create(data);
        await this.ormRepository.save(newUser);
        return newUser;
    }
    async findByEmail(email) {
        const findUser = await this.ormRepository.findOne({ where: { email } });
        return findUser;
    }
    async findById(user_id) {
        const findUser = await this.ormRepository.findOne(user_id);
        return findUser;
    }
}
exports.default = UserRepository;
