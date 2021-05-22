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

let CreateExamService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class CreateExamService {
  constructor(examRepository) {
    this.examRepository = examRepository;
  }

  async execute({
    title,
    description,
    started_at,
    ended_at,
    allow_anonymous,
    period_id
  }) {
    const findExam = await this.examRepository.findByTitle(title);

    if (findExam) {
      throw new _AppError.default('Name Exam exists');
    }

    const createExam = await this.examRepository.create({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id
    });
    return createExam;
  }

}) || _class) || _class) || _class) || _class);
var _default = CreateExamService;
exports.default = _default;