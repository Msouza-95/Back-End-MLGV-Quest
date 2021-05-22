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

let CopyExamService = (_dec = (0, _tsyringe.injectable)(), _dec2 = function (target, key) {
  return (0, _tsyringe.inject)('ExamRepository')(target, undefined, 0);
}, _dec3 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionRepository')(target, undefined, 1);
}, _dec4 = function (target, key) {
  return (0, _tsyringe.inject)('QuestionGroupRepository')(target, undefined, 2);
}, _dec5 = function (target, key) {
  return (0, _tsyringe.inject)('ExamQuestionGroupRepository')(target, undefined, 3);
}, _dec6 = Reflect.metadata("design:type", Function), _dec7 = Reflect.metadata("design:paramtypes", [typeof _IExamRepository.default === "undefined" ? Object : _IExamRepository.default, typeof _IQuestionRepository.default === "undefined" ? Object : _IQuestionRepository.default, typeof _IQuestionGroupRepository.default === "undefined" ? Object : _IQuestionGroupRepository.default, typeof _IExamQuestionGroupRepository.default === "undefined" ? Object : _IExamQuestionGroupRepository.default]), _dec(_class = _dec2(_class = _dec3(_class = _dec4(_class = _dec5(_class = _dec6(_class = _dec7(_class = class CopyExamService {
  constructor(examRepository, questionRepository, questionGroupRepository, examQuestionGroupRepository) {
    this.examRepository = examRepository;
    this.questionRepository = questionRepository;
    this.questionGroupRepository = questionGroupRepository;
    this.examQuestionGroupRepository = examQuestionGroupRepository;
  }

  async execute({
    id,
    title,
    description,
    started_at,
    ended_at,
    allow_anonymous
  }) {
    const oldExam = await this.examRepository.findById(id);

    if (!oldExam) {
      throw new _AppError.default('Exam id invalid');
    }

    const dataExam = await this.examQuestionGroupRepository.findByExamId(oldExam.id); // cria um exam novo

    const newExam = await this.examRepository.create({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous
    });

    if (dataExam) {
      const {
        length
      } = dataExam;

      for (let i = 0; i < length; i++) {
        // duplica os dados examQuestionGroup com id novo
        // eslint-disable-next-line no-await-in-loop
        const examQuestionGroup = await this.examQuestionGroupRepository.create({
          exam_id: newExam.id,
          question_group_id: dataExam[i].question_group_id
        }); // duplica os dados QuestionGroup com id novo
        // eslint-disable-next-line no-await-in-loop

        const dataQuestion = await this.questionRepository.findByExamGroupID(dataExam[i].id);
        const lengthQuestion = dataQuestion.length;

        for (let j = 0; j < lengthQuestion; j++) {
          // eslint-disable-next-line no-await-in-loop
          await this.questionRepository.create({
            statement: dataQuestion[j].statement,
            image_alt: dataQuestion[j].image_alt,
            image_url: dataQuestion[j].image_url,
            required: dataQuestion[j].required,
            exam_question_group_id: examQuestionGroup.id
          });
        }
      }
    }

    return newExam;
  }

}) || _class) || _class) || _class) || _class) || _class) || _class) || _class);
var _default = CopyExamService;
exports.default = _default;