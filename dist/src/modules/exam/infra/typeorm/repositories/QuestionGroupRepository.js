"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const QuestionGroup_1 = __importDefault(require("../entities/QuestionGroup"));
class QuestionGroupRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(QuestionGroup_1.default);
    }
    async create(data) {
        const newGroup = this.ormRepository.create(data);
        await this.ormRepository.save(newGroup);
        return newGroup;
    }
    async findById(id) {
        const findQuestionGroup = await this.ormRepository.findOne({
            where: { id },
        });
        return findQuestionGroup;
    }
    async findTitle(title) {
        const findQuestionGroup = await this.ormRepository.findOne({
            where: { title },
        });
        return findQuestionGroup;
    }
    async index() {
        const questionGroup = await this.ormRepository.find();
        return questionGroup;
    }
    async upadate(id, data) {
        const groupUpdate = await this.ormRepository.update(id, data);
        return groupUpdate;
    }
    async delete(id) {
        const groupDelete = this.ormRepository.delete(id);
        return groupDelete;
    }
}
exports.default = QuestionGroupRepository;
