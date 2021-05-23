"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateQuestionService = _interopRequireDefault(require("../../../services/CreateQuestionService"));

var _KeepQuestionService = _interopRequireDefault(require("../../../services/KeepQuestionService"));

var _ShowQuestionService = _interopRequireDefault(require("../../../services/ShowQuestionService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuestionController {
  async create(request, response) {
    const {
      statement,
      image_url,
      image_alt,
      required,
      question_group_id,
      exam_id
    } = request.body;

    const createQuestionService = _tsyringe.container.resolve(_CreateQuestionService.default);

    const question = await createQuestionService.execute({
      statement,
      image_url,
      image_alt,
      required,
      question_group_id,
      exam_id
    });
    return response.status(201).json(question);
  }

  async index(request, response) {
    const {
      exam_id,
      group_id
    } = request.params;

    const showQuestinService = _tsyringe.container.resolve(_ShowQuestionService.default);

    const questions = await showQuestinService.execute({
      exam_id: Number(exam_id),
      question_group_id: Number(group_id)
    });
    return response.status(200).json(questions);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const operation = 'DELETE';

    const keepQuestionService = _tsyringe.container.resolve(_KeepQuestionService.default);

    const result = await keepQuestionService.execute(Number(id), {
      operation
    });
    return response.status(200).json({
      result
    });
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const operation = 'UPDATE';
    const {
      statement,
      image_url,
      image_alt,
      required
    } = request.body;

    const keepQuestionService = _tsyringe.container.resolve(_KeepQuestionService.default);

    const result = await keepQuestionService.execute(Number(id), {
      operation,
      statement,
      image_url,
      image_alt,
      required
    });
    return response.status(200).json({
      result
    });
  }

}

var _default = QuestionController;
exports.default = _default;