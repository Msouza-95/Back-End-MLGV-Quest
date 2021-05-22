"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _PositionQuestionGroupService = _interopRequireDefault(require("../../../services/PositionQuestionGroupService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class PositonQuestionGroupController {
  async create(request, response) {
    const {
      exam_id,
      question_group_id,
      position
    } = request.body;

    const positionQuestionGroupService = _tsyringe.container.resolve(_PositionQuestionGroupService.default);

    const newposition = await positionQuestionGroupService.execute({
      exam_id,
      question_group_id,
      position
    });
    return response.status(200).json(newposition);
  }

}

var _default = PositonQuestionGroupController;
exports.default = _default;