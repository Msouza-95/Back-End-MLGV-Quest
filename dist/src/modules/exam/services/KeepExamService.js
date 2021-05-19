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
// Service responsavel por realizar as operações de delete e update
let KeepExamService = class KeepExamService {
    constructor(examRepository) {
        this.examRepository = examRepository;
    }
    async execute(id, { operation, title, description, started_at, ended_at, allow_anonymous, }) {
        const findExam = await this.examRepository.findById(id);
        if (!findExam) {
            throw new AppError_1.default('invalid id parameter');
        }
        if (operation === 'DELETE') {
            const examDeleted = await this.examRepository.delete(id);
            return {
                id,
                message: 'Delete success',
            };
        }
        if (operation === 'UPDATE') {
            if (title &&
                description &&
                started_at &&
                ended_at &&
                allow_anonymous !== undefined) {
                const examUpdate = await this.examRepository.update(id, {
                    title,
                    description,
                    started_at,
                    ended_at,
                    allow_anonymous,
                });
            }
        }
        return {
            id,
            message: 'update success',
        };
    }
};
KeepExamService = __decorate([
    tsyringe_1.injectable(),
    __param(0, tsyringe_1.inject('ExamRepository')),
    __metadata("design:paramtypes", [Object])
], KeepExamService);
exports.default = KeepExamService;
