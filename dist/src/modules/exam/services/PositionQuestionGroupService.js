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
let PositionQuestionGroupService = class PositionQuestionGroupService {
    constructor(questionGroupRepository, examQuestionGroupRepository, examRepository) {
        this.questionGroupRepository = questionGroupRepository;
        this.examQuestionGroupRepository = examQuestionGroupRepository;
        this.examRepository = examRepository;
    }
    async execute({ exam_id, question_group_id, position, }) {
        const exam = await this.examRepository.findById(exam_id);
        if (!exam) {
            throw new AppError_1.default('Exam id not Exists');
        }
        const questionGroup = await this.questionGroupRepository.findById(question_group_id);
        if (!questionGroup) {
            throw new AppError_1.default('QuestionGroup id not Exists');
        }
        const ids = await this.examQuestionGroupRepository.allEquivalente({
            exam_id,
            question_group_id,
        });
        ids?.forEach(async (element) => {
            const examQuestionGroup = await this.examQuestionGroupRepository.findById(element.id);
            const examQuestionGroupUpdated = await this.examQuestionGroupRepository.update(element.id, {
                exam_id,
                question_group_id,
                position,
            });
        });
        return { message: 'success' };
    }
};
PositionQuestionGroupService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('QuestionGroupRepository')),
    __param(1, tsyringe_1.inject('ExamQuestionGroupRepository')),
    __param(2, tsyringe_1.inject('ExamRepository')),
    __metadata("design:paramtypes", [Object, Object, Object])
], PositionQuestionGroupService);
exports.default = PositionQuestionGroupService;
