"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _QuestionGroup = _interopRequireDefault(require("../entities/QuestionGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class QuestionGroupRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_QuestionGroup.default);
  }

  async create(data) {
    const newGroup = this.ormRepository.create(data);
    await this.ormRepository.save(newGroup);
    return newGroup;
  }

  async findById(id) {
    const findQuestionGroup = await this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findQuestionGroup;
  }

  async findTitle(title) {
    const findQuestionGroup = await this.ormRepository.findOne({
      where: {
        title
      }
    });
    return findQuestionGroup;
  }

  async index() {
    const questionGroup = await this.ormRepository.find();
    return questionGroup;
  }

  async upadate(id, data) {
    const groupUpdate = await this.ormRepository.update(id, data);
    return groupUpdate;
  }

  async delete(id) {
    const groupDelete = this.ormRepository.delete(id);
    return groupDelete;
  }

}

var _default = QuestionGroupRepository;
exports.default = _default;