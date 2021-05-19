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
let CopyExamService = class CopyExamService {
    constructor(examRepository, questionRepository, questionGroupRepository, examQuestionGroupRepository) {
        this.examRepository = examRepository;
        this.questionRepository = questionRepository;
        this.questionGroupRepository = questionGroupRepository;
        this.examQuestionGroupRepository = examQuestionGroupRepository;
    }
    async execute({ id, title, description, started_at, ended_at, allow_anonymous, }) {
        const oldExam = await this.examRepository.findById(id);
        if (!oldExam) {
            throw new AppError_1.default('Exam id invalid');
        }
        const dataExam = await this.examQuestionGroupRepository.findByExamId(oldExam.id);
        // cria um exam novo
        const newExam = await this.examRepository.create({
            title,
            description,
            started_at,
            ended_at,
            allow_anonymous,
        });
        if (dataExam) {
            const { length } = dataExam;
            for (let i = 0; i < length; i++) {
                // duplica os dados examQuestionGroup com id novo
                // eslint-disable-next-line no-await-in-loop
                const examQuestionGroup = await this.examQuestionGroupRepository.create({
                    exam_id: newExam.id,
                    question_group_id: dataExam[i].question_group_id,
                });
                // duplica os dados QuestionGroup com id novo
                // eslint-disable-next-line no-await-in-loop
                const dataQuestion = await this.questionRepository.findByExamGroupID(dataExam[i].id);
                const lengthQuestion = dataQuestion.length;
                for (let j = 0; j < lengthQuestion; j++) {
                    // eslint-disable-next-line no-await-in-loop
                    await this.questionRepository.create({
                        statement: dataQuestion[j].statement,
                        image_alt: dataQuestion[j].image_alt,
                        image_url: dataQuestion[j].image_url,
                        required: dataQuestion[j].required,
                        exam_question_group_id: examQuestionGroup.id,
                    });
                }
            }
        }
        return newExam;
    }
};
CopyExamService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('ExamRepository')),
    __param(1, tsyringe_1.inject('QuestionRepository')),
    __param(2, tsyringe_1.inject('QuestionGroupRepository')),
    __param(3, tsyringe_1.inject('ExamQuestionGroupRepository')),
    __metadata("design:paramtypes", [Object, Object, Object, Object])
], CopyExamService);
exports.default = CopyExamService;
