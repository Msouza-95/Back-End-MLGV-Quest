"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const Exam_1 = __importDefault(require("../entities/Exam"));
class ExamRepository {
    constructor() {
        this.ormRepository = typeorm_1.getRepository(Exam_1.default);
    }
    async index() {
        const exams = await this.ormRepository.find();
        return exams;
    }
    async create(data) {
        const createExam = this.ormRepository.create(data);
        await this.ormRepository.save(createExam);
        return createExam;
    }
    findById(id) {
        const findExam = this.ormRepository.findOne({ where: { id } });
        return findExam;
    }
    findByTitle(title) {
        const findExam = this.ormRepository.findOne({ where: { title } });
        return findExam;
    }
    async delete(id) {
        const deleteResult = await this.ormRepository.delete(id);
        return deleteResult;
    }
    async update(id, data) {
        const examUpdate = await this.ormRepository.update(id, data);
        return examUpdate;
    }
}
exports.default = ExamRepository;
