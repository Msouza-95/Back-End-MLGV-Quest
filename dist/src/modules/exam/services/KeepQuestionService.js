"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IQuestionRepository = _interopRequireDefault(require("../repositories/IQuestionRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let KeepQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.default === "undefined" ? Object : _IQuestionRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class KeepQuestionService {
  constructor(questionRepository) {
    this.questionRepository = questionRepository;
  }

  async execute(id, {
    operation,
    statement,
    image_url,
    image_alt,
    required
  }) {
    const question = await this.questionRepository.findById(id);

    if (!question) {
      throw new _AppError.default(' invalid id parameter ');
    }

    if (operation === 'DELETE') {
      const questionGroupDeleted = await this.questionRepository.delete(id);
      return {
        id,
        message: 'Delete success'
      };
    }

    if (operation === 'UPDATE') {
      if (statement && image_url && image_alt && required !== undefined) {
        const questionGroup = await this.questionRepository.upadate(id, {
          statement,
          image_url,
          image_alt,
          required
        });
      }
    }

    return {
      id,
      message: 'update success'
    };
  }

}) || _class) || _class) || _class) || _class);
var _default = KeepQuestionService;
exports.default = _default;