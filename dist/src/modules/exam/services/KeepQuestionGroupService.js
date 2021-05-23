"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IQuestionGroupRepository = _interopRequireDefault(require("../repositories/IQuestionGroupRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let KeepQuestionGroupService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionGroupRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionGroupRepository.default === "undefined" ? Object : _IQuestionGroupRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class KeepQuestionGroupService {
  constructor(questionGroupRepository) {
    this.questionGroupRepository = questionGroupRepository;
  }

  async execute(id, {
    operation,
    title,
    classs
  }) {
    const questionGroup = await this.questionGroupRepository.findById(id);

    if (!questionGroup) {
      throw new _AppError.default(' invalid id parameter ');
    }

    if (operation === 'DELETE') {
      const questionGroupDeleted = await this.questionGroupRepository.delete(id);
      return {
        id,
        message: 'Delete success'
      };
    }

    if (operation === 'UPDATE') {
      if (title && classs !== undefined) {
        const questionGroup = await this.questionGroupRepository.upadate(id, {
          title,
          classs
        });
      }
    }

    return {
      id,
      message: 'update success'
    };
  }

}) || _class) || _class) || _class) || _class);
var _default = KeepQuestionGroupService;
exports.default = _default;