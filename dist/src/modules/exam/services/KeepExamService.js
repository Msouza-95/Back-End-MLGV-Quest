"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IExamRepository = _interopRequireDefault(require("../repositories/IExamRepository"));

var _dec, _dec2, _dec3, _dec4, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Service responsavel por realizar as operações de delete e update
let KeepExamService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class KeepExamService {
  constructor(examRepository) {
    this.examRepository = examRepository;
  }

  async execute(id, {
    operation,
    title,
    description,
    started_at,
    ended_at,
    allow_anonymous
  }) {
    const findExam = await this.examRepository.findById(id);

    if (!findExam) {
      throw new _AppError.default('invalid id parameter');
    }

    if (operation === 'DELETE') {
      const examDeleted = await this.examRepository.delete(id);
      return {
        id,
        message: 'Delete success'
      };
    }

    if (operation === 'UPDATE') {
      if (title && description && started_at && ended_at && allow_anonymous !== undefined) {
        const examUpdate = await this.examRepository.update(id, {
          title,
          description,
          started_at,
          ended_at,
          allow_anonymous
        });
      }
    }

    return {
      id,
      message: 'update success'
    };
  }

}) || _class) || _class) || _class) || _class);
var _default = KeepExamService;
exports.default = _default;