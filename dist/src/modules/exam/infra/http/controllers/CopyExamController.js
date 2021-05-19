"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const CopyExamService_1 = __importDefault(require("@modules/exam/services/CopyExamService"));
class CopyExamContoller {
    async create(request, response) {
        const { title, description, started_at, ended_at, allow_anonymous, } = request.body;
        const { id } = request.params;
        const copyExamService = tsyringe_1.container.resolve(CopyExamService_1.default);
        const newExam = await copyExamService.execute({
            id: Number(id),
            title,
            description,
            started_at,
            ended_at,
            allow_anonymous,
        });
        return response.status(200).json(newExam);
    }
}
exports.default = CopyExamContoller;
