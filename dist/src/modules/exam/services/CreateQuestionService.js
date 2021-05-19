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
const AppError_1 = __importDefault(require("@shared/errors/AppError"));
let CreateQuestionService = class CreateQuestionService {
    constructor(examRepository, questionRepository, questionGroupRepository, examQuestionGroupRepository) {
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
        this.questionGroupRepository = questionGroupRepository;
        this.examQuestionGroupRepository = examQuestionGroupRepository;
    }
    async execute({ statement, image_url, image_alt, required, question_group_id, exam_id, }) {
        const questionGroup = await this.questionGroupRepository.findById(question_group_id);
        if (!questionGroup) {
            throw new AppError_1.default(' QuestionGrou id invalid');
        }
        const exam = await this.examRepository.findById(exam_id);
        if (!exam) {
            throw new AppError_1.default(' Exam id invalid');
        }
        const id = await this.examQuestionGroupRepository.allEquivalente({
            question_group_id,
            exam_id,
        });
        if (id?.length === 0) {
            const examQuestionGroup = await this.examQuestionGroupRepository.create({
                question_group_id,
                exam_id,
            });
            const newQuestion = await this.questionRepository.create({
                statement,
                image_url,
                image_alt,
                required,
                exam_question_group_id: examQuestionGroup.id,
            });
            return newQuestion;
        }
        if (id) {
            const newQuestion = await this.questionRepository.create({
                statement,
                image_url,
                image_alt,
                required,
                exam_question_group_id: id[0].id,
            });
            return newQuestion;
        }
        throw new AppError_1.default('erro createQuestion');
    }
};
CreateQuestionService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('ExamRepository')),
    __param(1, tsyringe_1.inject('QuestionRepository')),
    __param(2, tsyringe_1.inject('QuestionGroupRepository')),
    __param(3, tsyringe_1.inject('ExamQuestionGroupRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], CreateQuestionService);
exports.default = CreateQuestionService;
