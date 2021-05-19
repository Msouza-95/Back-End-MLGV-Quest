"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const Question_1 = __importDefault(require("../infra/typeorm/entities/Question"));
let ShowQuestionService = class ShowQuestionService {
    constructor(questionRepository, examQuestionGroupRepository) {
        this.questionRepository = questionRepository;
        this.examQuestionGroupRepository = examQuestionGroupRepository;
    }
    async execute({ exam_id, question_group_id, }) {
        const ids = await this.examQuestionGroupRepository.allEquivalente({
            exam_id,
            question_group_id,
        });
        const questions = [];
        if (ids) {
            const { length } = ids;
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < length; i++) {
                const question = new Question_1.default();
                // eslint-disable-next-line no-await-in-loop
                Object.assign(question, 
                // eslint-disable-next-line no-await-in-loop
                await this.questionRepository.findByExamGroupID(ids[i].id));
                questions.push(question);
            }
        }
        return questions;
    }
};
ShowQuestionService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('QuestionRepository')),
    __param(1, tsyringe_1.inject('ExamQuestionGroupRepository')),
    __metadata("design:paramtypes", [Object, Object])
], ShowQuestionService);
exports.default = ShowQuestionService;
