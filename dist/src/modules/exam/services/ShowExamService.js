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

let ShowExamService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 0);
}, _dec3 = Reflect.metadata("design:type", Function), _dec4 = Reflect.metadata("design:paramtypes", [typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = class ShowExamService {
  constructor(examRepository) {
    this.examRepository = examRepository;
  }

  async execute(id) {
    // retorna um exam
    if (id) {
      const exam = await this.examRepository.findById(id);

      if (exam) {
        return exam;
      }

      throw new _AppError.default('exam not exists');
    } // retorna all exams


    const exams = await this.examRepository.index();
    return exams;
  }

}) || _class) || _class) || _class) || _class);
var _default = ShowExamService;
exports.default = _default;