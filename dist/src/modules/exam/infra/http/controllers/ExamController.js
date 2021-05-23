"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CreateExamService = _interopRequireDefault(require("../../../services/CreateExamService"));

var _KeepExamService = _interopRequireDefault(require("../../../services/KeepExamService"));

var _ShowExamService = _interopRequireDefault(require("../../../services/ShowExamService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamController {
  async create(request, response) {
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id
    } = request.body;

    const createExamService = _tsyringe.container.resolve(_CreateExamService.default);

    const newExam = await createExamService.execute({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id
    });
    return response.status(201).json(newExam);
  }

  async index(request, response) {
    const showExamService = _tsyringe.container.resolve(_ShowExamService.default);

    const exams = await showExamService.execute();
    return response.status(201).json(exams);
  }

  async delete(request, response) {
    const {
      id
    } = request.params;
    const operation = 'DELETE';

    const keepExamService = _tsyringe.container.resolve(_KeepExamService.default);

    const result = await keepExamService.execute(Number(id), {
      operation
    });
    return response.status(200).json(result);
  }

  async read(request, response) {
    const {
      id
    } = request.params;

    const showExamService = _tsyringe.container.resolve(_ShowExamService.default);

    const exam = await showExamService.execute(Number(id));
    return response.status(201).json(exam);
  }

  async update(request, response) {
    const {
      id
    } = request.params;
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous
    } = request.body;
    const operation = 'UPDATE';

    const keepExamService = _tsyringe.container.resolve(_KeepExamService.default);

    const result = await keepExamService.execute(Number(id), {
      operation,
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous
    });
    return response.status(200).json(result);
  }

}

var _default = ExamController;
exports.default = _default;