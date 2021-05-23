"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Question = _interopRequireDefault(require("../entities/Question"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuestionRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Question.default);
  }

  async create(data) {
    const newQuestion = this.ormRepository.create(data);
    await this.ormRepository.save(newQuestion);
    return newQuestion;
  }

  async findById(id) {
    const findQuest = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findQuest;
  }

  async findByExamGroupID(exam_question_group_id) {
    const findQuest = await this.ormRepository.find({
      where: {
        exam_question_group_id
      }
    });
    return findQuest;
  }

  async delete(id) {
    const result = await this.ormRepository.delete(id);
    return result;
  }

  async upadate(id, data) {
    const result = await this.ormRepository.update(id, data);
    return result;
  }

}

var _default = QuestionRepository;
exports.default = _default;