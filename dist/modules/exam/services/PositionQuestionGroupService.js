"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _AppError = _interopRequireDefault(require("../../../shared/errors/AppError"));

var _IExamQuestionGroupRepository = _interopRequireDefault(require("../repositories/IExamQuestionGroupRepository"));

var _IExamRepository = _interopRequireDefault(require("../repositories/IExamRepository"));

var _IQuestionGroupRepository = _interopRequireDefault(require("../repositories/IQuestionGroupRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PositionQuestionGroupService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionGroupRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ExamQuestionGroupRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 2);
}, _dec5 = Reflect.metadata("design:type", Function), _dec6 = Reflect.metadata("design:paramtypes", [typeof _IQuestionGroupRepository.default === "undefined" ? Object : _IQuestionGroupRepository.default, typeof _IExamQuestionGroupRepository.default === "undefined" ? Object : _IExamQuestionGroupRepository.default, typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = class PositionQuestionGroupService {
  constructor(questionGroupRepository, examQuestionGroupRepository, examRepository) {
    this.questionGroupRepository = questionGroupRepository;
    this.examQuestionGroupRepository = examQuestionGroupRepository;
    this.examRepository = examRepository;
  }

  async execute({
    exam_id,
    question_group_id,
    position
  }) {
    const exam = await this.examRepository.findById(exam_id);

    if (!exam) {
      throw new _AppError.default('Exam id not Exists');
    }

    const questionGroup = await this.questionGroupRepository.findById(question_group_id);

    if (!questionGroup) {
      throw new _AppError.default('QuestionGroup id not Exists');
    }

    const ids = await this.examQuestionGroupRepository.allEquivalente({
      exam_id,
      question_group_id
    });
    ids === null || ids === void 0 ? void 0 : ids.forEach(async element => {
      const examQuestionGroup = await this.examQuestionGroupRepository.findById(element.id);
      const examQuestionGroupUpdated = await this.examQuestionGroupRepository.update(element.id, {
        exam_id,
        question_group_id,
        position
      });
    });
    return {
      message: 'success'
    };
  }

}) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = PositionQuestionGroupService;
exports.default = _default;