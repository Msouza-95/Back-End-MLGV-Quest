"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Question = _interopRequireDefault(require("../../infra/typeorm/entities/Question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeQuestionRepository {
  constructor() {
    this.questions = [];
  }

  delete(id) {
    throw new Error('Method not implemented.');
  }

  upadate(id, data) {
    throw new Error('Method not implemented.');
  }

  async create(data) {
    const nextId = this.questions.length + 1;
    const newQuestion = new _Question.default();
    Object.assign(newQuestion, {
      id: nextId
    }, data);
    this.questions.push(newQuestion);
    return newQuestion;
  }

  async findById(id) {
    const findQuesntion = this.questions.find(quest => quest.id === id);
    return findQuesntion;
  }

  async findByExamGroupID(exam_question_group_id) {
    const findQuesntion = this.questions.filter(question => question.exam_question_group_id === exam_question_group_id);
    return findQuesntion;
  }

}

var _default = FakeQuestionRepository;
exports.default = _default;