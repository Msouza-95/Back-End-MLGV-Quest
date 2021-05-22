"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateQuestionGroupService = _interopRequireDefault(require("../../../services/CreateQuestionGroupService"));

var _KeepQuestionGroupService = _interopRequireDefault(require("../../../services/KeepQuestionGroupService"));

var _ShowQuestionGroupService = _interopRequireDefault(require("../../../services/ShowQuestionGroupService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuestionGroupController {
  async create(request, response) {
    const {
      title,
      classs
    } = request.body;

    const createQuestionGroupService = _tsyringe.container.resolve(_CreateQuestionGroupService.default);

    const questionGroup = await createQuestionGroupService.execute({
      title,
      classs
    });
    return response.status(201).json(questionGroup);
  }

  async index(request, response) {
    const showQuestionGroupService = _tsyringe.container.resolve(_ShowQuestionGroupService.default);

    const questionGroups = await showQuestionGroupService.execute();
    return response.status(200).json(questionGroups);
  }

  async read(request, response) {
    const {
      id
    } = request.params;

    const showQuestionGroupService = _tsyringe.container.resolve(_ShowQuestionGroupService.default);

    const questionGroup = await showQuestionGroupService.execute(Number(id));
    return response.status(200).json(questionGroup);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const operation = 'DELETE';

    const keepQuestionGroupService = _tsyringe.container.resolve(_KeepQuestionGroupService.default);

    const result = await keepQuestionGroupService.execute(Number(id), {
      operation
    });
    return response.status(200).json(result);
  }

  async update(request, response) {
    const {
      title,
      classs
    } = request.body;
    const {
      id
    } = request.params;
    const operation = 'UPDATE';

    const keepQuestionGroupService = _tsyringe.container.resolve(_KeepQuestionGroupService.default);

    const result = await keepQuestionGroupService.execute(Number(id), {
      operation,
      title,
      classs
    });
    return response.status(200).json(result);
  }

}

var _default = QuestionGroupController;
exports.default = _default;