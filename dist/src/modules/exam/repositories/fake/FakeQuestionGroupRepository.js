"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const QuestionGroup_1 = __importDefault(require("@modules/exam/infra/typeorm/entities/QuestionGroup"));
class FakeQuestionGroupRepository {
    constructor() {
        this.questionGroups = [];
    }
    index() {
        throw new Error('Method not implemented.');
    }
    upadate(id, data) {
        throw new Error('Method not implemented.');
    }
    delete(id) {
        throw new Error('Method not implemented.');
    }
    async create(data) {
        const nextId = this.questionGroups.length + 1;
        const newQuestionGroup = new QuestionGroup_1.default();
        Object.assign(newQuestionGroup, { id: nextId }, data);
        this.questionGroups.push(newQuestionGroup);
        return newQuestionGroup;
    }
    async findById(id) {
        const findQuesntionGroup = this.questionGroups.find(quest => quest.id === id);
        return findQuesntionGroup;
    }
    async findTitle(title) {
        const findQuesntionGroup = this.questionGroups.find(quest => quest.title === title);
        return findQuesntionGroup;
    }
}
exports.default = FakeQuestionGroupRepository;
