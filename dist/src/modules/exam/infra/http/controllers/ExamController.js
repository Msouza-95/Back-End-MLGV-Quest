"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateExamService_1 = __importDefault(require("@modules/exam/services/CreateExamService"));
const KeepExamService_1 = __importDefault(require("@modules/exam/services/KeepExamService"));
const ShowExamService_1 = __importDefault(require("@modules/exam/services/ShowExamService"));
class ExamController {
    async create(request, response) {
        const { title, description, started_at, ended_at, allow_anonymous, period_id, } = request.body;
        const createExamService = tsyringe_1.container.resolve(CreateExamService_1.default);
        const newExam = await createExamService.execute({
            title,
            description,
            started_at,
            ended_at,
            allow_anonymous,
            period_id,
        });
        return response.status(201).json(newExam);
    }
    async index(request, response) {
        const showExamService = tsyringe_1.container.resolve(ShowExamService_1.default);
        const exams = await showExamService.execute();
        return response.status(201).json(exams);
    }
    async delete(request, response) {
        const { id } = request.params;
        const operation = 'DELETE';
        const keepExamService = tsyringe_1.container.resolve(KeepExamService_1.default);
        const result = await keepExamService.execute(Number(id), { operation });
        return response.status(200).json(result);
    }
    async read(request, response) {
        const { id } = request.params;
        const showExamService = tsyringe_1.container.resolve(ShowExamService_1.default);
        const exam = await showExamService.execute(Number(id));
        return response.status(201).json(exam);
    }
    async update(request, response) {
        const { id } = request.params;
        const { title, description, started_at, ended_at, allow_anonymous, } = request.body;
        const operation = 'UPDATE';
        const keepExamService = tsyringe_1.container.resolve(KeepExamService_1.default);
        const result = await keepExamService.execute(Number(id), {
            operation,
            title,
            description,
            started_at,
            ended_at,
            allow_anonymous,
        });
        return response.status(200).json(result);
    }
}
exports.default = ExamController;
