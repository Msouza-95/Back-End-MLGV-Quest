"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Question_1 = __importDefault(require("../entities/Question"));
class QuestionRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Question_1.default);
    }
    async create(data) {
        const newQuestion = this.ormRepository.create(data);
        await this.ormRepository.save(newQuestion);
        return newQuestion;
    }
    async findById(id) {
        const findQuest = await this.ormRepository.findOne({ where: { id } });
        return findQuest;
    }
    async findByExamGroupID(exam_question_group_id) {
        const findQuest = await this.ormRepository.find({
            where: { exam_question_group_id },
        });
        return findQuest;
    }
    async delete(id) {
        const result = await this.ormRepository.delete(id);
        return result;
    }
    async upadate(id, data) {
        const result = await this.ormRepository.update(id, data);
        return result;
    }
}
exports.default = QuestionRepository;
