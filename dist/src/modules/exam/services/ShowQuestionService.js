"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tsyringe = require("tsyringe");

var _Question = _interopRequireDefault(require("../infra/typeorm/entities/Question"));

var _IExamQuestionGroupRepository = _interopRequireDefault(require("../repositories/IExamQuestionGroupRepository"));

var _IQuestionRepository = _interopRequireDefault(require("../repositories/IQuestionRepository"));

var _dec, _dec2, _dec3, _dec4, _dec5, _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ShowQuestionService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('ExamQuestionGroupRepository')(target, undefined, 1);
}, _dec4 = Reflect.metadata("design:type", Function), _dec5 = Reflect.metadata("design:paramtypes", [typeof _IQuestionRepository.default === "undefined" ? Object : _IQuestionRepository.default, typeof _IExamQuestionGroupRepository.default === "undefined" ? Object : _IExamQuestionGroupRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = class ShowQuestionService {
  constructor(questionRepository, examQuestionGroupRepository) // private questions: Question[],
  {
    this.questionRepository = questionRepository;
    this.examQuestionGroupRepository = examQuestionGroupRepository;
  }

  async execute({
    exam_id,
    question_group_id
  }) {
    const ids = await this.examQuestionGroupRepository.allEquivalente({
      exam_id,
      question_group_id
    });
    const questions = [];

    if (ids) {
      const {
        length
      } = ids; // eslint-disable-next-line no-plusplus

      for (let i = 0; i < length; i++) {
        const question = new _Question.default(); // eslint-disable-next-line no-await-in-loop

        Object.assign(question, // eslint-disable-next-line no-await-in-loop
        await this.questionRepository.findByExamGroupID(ids[i].id));
        questions.push(question);
      }
    }

    return questions;
  }

}) || _class) || _class) || _class) || _class) || _class);
var _default = ShowQuestionService;
exports.default = _default;