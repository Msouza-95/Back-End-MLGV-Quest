"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const ExamQuestionGroup_1 = __importDefault(require("../entities/ExamQuestionGroup"));
class ExamQuestionGroupRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(ExamQuestionGroup_1.default);
    }
    async create(data) {
        const newExamQuestionGroup = this.ormRepository.create(data);
        await this.ormRepository.save(newExamQuestionGroup);
        return newExamQuestionGroup;
    }
    async findById(id) {
        const findExamQuestionGroup = await this.ormRepository.findOne({
            where: { id },
        });
        return findExamQuestionGroup;
    }
    async save(exam) {
        return this.ormRepository.save(exam);
    }
    async findByQuestionGroupID(question_group_id) {
        const findExamQuestionGroup = await this.ormRepository.findOne({
            where: { question_group_id },
        });
        return findExamQuestionGroup;
    }
    async allEquivalente(data) {
        const findExamQuestionGroup = await this.ormRepository.find({
            select: ['id'],
            where: [
                { question_group_id: data.question_group_id, exam_id: data.exam_id },
            ],
        });
        return findExamQuestionGroup;
    }
    async update(id, data) {
        const result = await this.ormRepository.update(id, data);
        return result;
    }
    async findByExamId(exam_id) {
        const findGroup = await this.ormRepository.find({ where: { exam_id } });
        return findGroup;
    }
}
exports.default = ExamQuestionGroupRepository;
