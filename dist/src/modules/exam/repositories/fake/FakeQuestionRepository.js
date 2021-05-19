"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Question_1 = __importDefault(require("@modules/exam/infra/typeorm/entities/Question"));
class FakeQuestionRepository {
    constructor() {
        this.questions = [];
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    upadate(id, data) {
        throw new Error('Method not implemented.');
    }
    async create(data) {
        const nextId = this.questions.length + 1;
        const newQuestion = new Question_1.default();
        Object.assign(newQuestion, { id: nextId }, data);
        this.questions.push(newQuestion);
        return newQuestion;
    }
    async findById(id) {
        const findQuesntion = this.questions.find(quest => quest.id === id);
        return findQuesntion;
    }
    async findByExamGroupID(exam_question_group_id) {
        const findQuesntion = this.questions.filter(question => question.exam_question_group_id === exam_question_group_id);
        return findQuesntion;
    }
}
exports.default = FakeQuestionRepository;
