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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Question_1 = __importDefault(require("./Question"));
const QuestionGroup_1 = __importDefault(require("./QuestionGroup"));
let ExamQuestionGroup = class ExamQuestionGroup {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], ExamQuestionGroup.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ExamQuestionGroup.prototype, "position", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ExamQuestionGroup.prototype, "exam_id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], ExamQuestionGroup.prototype, "question_group_id", void 0);
__decorate([
    typeorm_1.OneToMany(() => Question_1.default, question => question.examQuestionGroup),
    __metadata("design:type", Array)
], ExamQuestionGroup.prototype, "questions", void 0);
__decorate([
    typeorm_1.ManyToOne(() => QuestionGroup_1.default, questionGroup => questionGroup.examQuestionGroups),
    typeorm_1.JoinColumn({ name: 'question_group_id' }),
    __metadata("design:type", QuestionGroup_1.default)
], ExamQuestionGroup.prototype, "questionGroup", void 0);
ExamQuestionGroup = __decorate([
    typeorm_1.Entity('examQuestionGroup')
], ExamQuestionGroup);
exports.default = ExamQuestionGroup;
