"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tsyringe_1 = require("tsyringe");
const PositionQuestionGroupService_1 = __importDefault(require("@modules/exam/services/PositionQuestionGroupService"));
class PositonQuestionGroupController {
    async create(request, response) {
        const { exam_id, question_group_id, position } = request.body;
        const positionQuestionGroupService = tsyringe_1.container.resolve(PositionQuestionGroupService_1.default);
        const newposition = await positionQuestionGroupService.execute({
            exam_id,
            question_group_id,
            position,
        });
        return response.status(200).json(newposition);
    }
}
exports.default = PositonQuestionGroupController;
