"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateQuestionService_1 = __importDefault(require("@modules/exam/services/CreateQuestionService"));
const KeepQuestionService_1 = __importDefault(require("@modules/exam/services/KeepQuestionService"));
const ShowQuestionService_1 = __importDefault(require("@modules/exam/services/ShowQuestionService"));
class QuestionController {
    async create(request, response) {
        const { statement, image_url, image_alt, required, question_group_id, exam_id, } = request.body;
        const createQuestionService = tsyringe_1.container.resolve(CreateQuestionService_1.default);
        const question = await createQuestionService.execute({
            statement,
            image_url,
            image_alt,
            required,
            question_group_id,
            exam_id,
        });
        return response.status(201).json(question);
    }
    async index(request, response) {
        const { exam_id, group_id } = request.params;
        const showQuestinService = tsyringe_1.container.resolve(ShowQuestionService_1.default);
        const questions = await showQuestinService.execute({
            exam_id: Number(exam_id),
            question_group_id: Number(group_id),
        });
        return response.status(200).json(questions);
    }
    async delete(request, response) {
        const { id } = request.params;
        const operation = 'DELETE';
        const keepQuestionService = tsyringe_1.container.resolve(KeepQuestionService_1.default);
        const result = await keepQuestionService.execute(Number(id), { operation });
        return response.status(200).json({ result });
    }
    async update(request, response) {
        const { id } = request.params;
        const operation = 'UPDATE';
        const { statement, image_url, image_alt, required } = request.body;
        const keepQuestionService = tsyringe_1.container.resolve(KeepQuestionService_1.default);
        const result = await keepQuestionService.execute(Number(id), {
            operation,
            statement,
            image_url,
            image_alt,
            required,
        });
        return response.status(200).json({ result });
    }
}
exports.default = QuestionController;
