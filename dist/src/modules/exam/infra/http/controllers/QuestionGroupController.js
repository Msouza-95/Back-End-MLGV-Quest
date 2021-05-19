"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CreateQuestionGroupService_1 = __importDefault(require("@modules/exam/services/CreateQuestionGroupService"));
const KeepQuestionGroupService_1 = __importDefault(require("@modules/exam/services/KeepQuestionGroupService"));
const ShowQuestionGroupService_1 = __importDefault(require("@modules/exam/services/ShowQuestionGroupService"));
class QuestionGroupController {
    async create(request, response) {
        const { title, classs } = request.body;
        const createQuestionGroupService = tsyringe_1.container.resolve(CreateQuestionGroupService_1.default);
        const questionGroup = await createQuestionGroupService.execute({
            title,
            classs,
        });
        return response.status(201).json(questionGroup);
    }
    async index(request, response) {
        const showQuestionGroupService = tsyringe_1.container.resolve(ShowQuestionGroupService_1.default);
        const questionGroups = await showQuestionGroupService.execute();
        return response.status(200).json(questionGroups);
    }
    async read(request, response) {
        const { id } = request.params;
        const showQuestionGroupService = tsyringe_1.container.resolve(ShowQuestionGroupService_1.default);
        const questionGroup = await showQuestionGroupService.execute(Number(id));
        return response.status(200).json(questionGroup);
    }
    async delete(request, response) {
        const { id } = request.params;
        const operation = 'DELETE';
        const keepQuestionGroupService = tsyringe_1.container.resolve(KeepQuestionGroupService_1.default);
        const result = await keepQuestionGroupService.execute(Number(id), {
            operation,
        });
        return response.status(200).json(result);
    }
    async update(request, response) {
        const { title, classs } = request.body;
        const { id } = request.params;
        const operation = 'UPDATE';
        const keepQuestionGroupService = tsyringe_1.container.resolve(KeepQuestionGroupService_1.default);
        const result = await keepQuestionGroupService.execute(Number(id), {
            operation,
            title,
            classs,
        });
        return response.status(200).json(result);
    }
}
exports.default = QuestionGroupController;
