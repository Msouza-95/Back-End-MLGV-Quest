"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Auth_1 = __importDefault(require("../entities/Auth"));
class AuthRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Auth_1.default);
    }
    async create(user_id, password) {
        const newAthu = this.ormRepository.create({ user_id, password });
        await this.ormRepository.save(newAthu);
        return newAthu;
    }
    async findByUserID(user_id) {
        const findUser = await this.ormRepository.findOne({ where: { user_id } });
        return findUser;
    }
}
exports.default = AuthRepository;
