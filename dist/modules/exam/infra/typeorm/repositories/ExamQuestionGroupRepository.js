"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _ExamQuestionGroup = _interopRequireDefault(require("../entities/ExamQuestionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamQuestionGroupRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_ExamQuestionGroup.default);
  }

  async create(data) {
    const newExamQuestionGroup = this.ormRepository.create(data);
    await this.ormRepository.save(newExamQuestionGroup);
    return newExamQuestionGroup;
  }

  async findById(id) {
    const findExamQuestionGroup = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findExamQuestionGroup;
  }

  async save(exam) {
    return this.ormRepository.save(exam);
  }

  async findByQuestionGroupID(question_group_id) {
    const findExamQuestionGroup = await this.ormRepository.findOne({
      where: {
        question_group_id
      }
    });
    return findExamQuestionGroup;
  }

  async allEquivalente(data) {
    const findExamQuestionGroup = await this.ormRepository.find({
      select: ['id'],
      where: [{
        question_group_id: data.question_group_id,
        exam_id: data.exam_id
      }]
    });
    return findExamQuestionGroup;
  }

  async update(id, data) {
    const result = await this.ormRepository.update(id, data);
    return result;
  }

  async findByExamId(exam_id) {
    const findGroup = await this.ormRepository.find({
      where: {
        exam_id
      }
    });
    return findGroup;
  }

}

var _default = ExamQuestionGroupRepository;
exports.default = _default;