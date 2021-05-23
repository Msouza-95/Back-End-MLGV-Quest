"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _CopyExamService = _interopRequireDefault(require("../../../services/CopyExamService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class CopyExamContoller {
  async create(request, response) {
    const {
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous
    } = request.body;
    const {
      id
    } = request.params;

    const copyExamService = _tsyringe.container.resolve(_CopyExamService.default);

    const newExam = await copyExamService.execute({
      id: Number(id),
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous
    });
    return response.status(200).json(newExam);
  }

}

var _default = CopyExamContoller;
exports.default = _default;