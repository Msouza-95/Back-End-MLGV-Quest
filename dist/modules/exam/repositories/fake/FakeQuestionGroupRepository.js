"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _QuestionGroup = _interopRequireDefault(require("../../infra/typeorm/entities/QuestionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeQuestionGroupRepository {
  constructor() {
    this.questionGroups = [];
  }

  index() {
    throw new Error('Method not implemented.');
  }

  upadate(id, data) {
    throw new Error('Method not implemented.');
  }

  delete(id) {
    throw new Error('Method not implemented.');
  }

  async create(data) {
    const nextId = this.questionGroups.length + 1;
    const newQuestionGroup = new _QuestionGroup.default();
    Object.assign(newQuestionGroup, {
      id: nextId
    }, data);
    this.questionGroups.push(newQuestionGroup);
    return newQuestionGroup;
  }

  async findById(id) {
    const findQuesntionGroup = this.questionGroups.find(quest => quest.id === id);
    return findQuesntionGroup;
  }

  async findTitle(title) {
    const findQuesntionGroup = this.questionGroups.find(quest => quest.title === title);
    return findQuesntionGroup;
  }

}

var _default = FakeQuestionGroupRepository;
exports.default = _default;