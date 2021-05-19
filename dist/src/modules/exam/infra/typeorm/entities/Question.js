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
const ExamQuestionGroup_1 = __importDefault(require("./ExamQuestionGroup"));
let Question = class Question {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Question.prototype, "id", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "statement", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "image_url", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Question.prototype, "image_alt", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Question.prototype, "required", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Question.prototype, "exam_question_group_id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => ExamQuestionGroup_1.default, examQuestionGroup => examQuestionGroup.questions),
    typeorm_1.JoinColumn({ name: 'exam_question_group_id' }),
    __metadata("design:type", ExamQuestionGroup_1.default)
], Question.prototype, "examQuestionGroup", void 0);
Question = __decorate([
    typeorm_1.Entity('question')
], Question);
exports.default = Question;
