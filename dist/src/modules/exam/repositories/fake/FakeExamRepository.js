"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Exam_1 = __importDefault(require("@modules/exam/infra/typeorm/entities/Exam"));
class FakeExamRepository {
    constructor() {
        this.exams = [];
    }
    async create(data) {
        const nextId = this.exams.length + 1;
        const newExam = new Exam_1.default();
        Object.assign(newExam, { id: nextId }, data);
        this.exams.push(newExam);
        return newExam;
    }
    async findById(id) {
        const findExam = this.exams.find(exam => exam.id === id);
        return findExam;
    }
    async findByTitle(title) {
        const findExam = this.exams.find(exam => exam.title === title);
        return findExam;
    }
    async index() {
        return this.exams;
    }
    async delete(id) {
        const index = this.exams.findIndex(exam => exam.id === id);
        this.exams.splice(index, 1);
        const deletes = new typeorm_1.DeleteResult();
        return deletes;
    }
    async update(id, data) {
        throw new Error('Method not implemented de update exam');
    }
}
exports.default = FakeExamRepository;
