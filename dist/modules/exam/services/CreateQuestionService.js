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

var _IQuestionRepository = _interopRequireDefault(require("../repositories/IQuestionRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let CreateQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionGroupRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('ExamQuestionGroupRepository')(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default, typeof _IQuestionRepository.default === "undefined" ? Object : _IQuestionRepository.default, typeof _IQuestionGroupRepository.default === "undefined" ? Object : _IQuestionGroupRepository.default, typeof _IExamQuestionGroupRepository.default === "undefined" ? Object : _IExamQuestionGroupRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class CreateQuestionService {
  constructor(examRepository, questionRepository, questionGroupRepository, examQuestionGroupRepository) {
    this.examRepository = examRepository;
    this.questionRepository = questionRepository;
    this.questionGroupRepository = questionGroupRepository;
    this.examQuestionGroupRepository = examQuestionGroupRepository;
  }

  async execute({
    statement,
    image_url,
    image_alt,
    required,
    question_group_id,
    exam_id
  }) {
    const questionGroup = await this.questionGroupRepository.findById(question_group_id);

    if (!questionGroup) {
      throw new _AppError.default(' QuestionGrou id invalid');
    }

    const exam = await this.examRepository.findById(exam_id);

    if (!exam) {
      throw new _AppError.default(' Exam id invalid');
    }

    const id = await this.examQuestionGroupRepository.allEquivalente({
      question_group_id,
      exam_id
    });

    if ((id === null || id === void 0 ? void 0 : id.length) === 0) {
      const examQuestionGroup = await this.examQuestionGroupRepository.create({
        question_group_id,
        exam_id
      });
      const newQuestion = await this.questionRepository.create({
        statement,
        image_url,
        image_alt,
        required,
        exam_question_group_id: examQuestionGroup.id
      });
      return newQuestion;
    }

    if (id) {
      const newQuestion = await this.questionRepository.create({
        statement,
        image_url,
        image_alt,
        required,
        exam_question_group_id: id[0].id
      });
      return newQuestion;
    }

    throw new _AppError.default('erro createQuestion');
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = CreateQuestionService;
exports.default = _default;