"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Exam = _interopRequireDefault(require("../entities/Exam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamRepository {
  constructor() {
    this.ormRepository = void 0;
    this.ormRepository = (0, _typeorm.getRepository)(_Exam.default);
  }

  async index() {
    const exams = await this.ormRepository.find();
    return exams;
  }

  async create(data) {
    const createExam = this.ormRepository.create(data);
    await this.ormRepository.save(createExam);
    return createExam;
  }

  findById(id) {
    const findExam = this.ormRepository.findOne({
      where: {
        id
      }
    });
    return findExam;
  }

  findByTitle(title) {
    const findExam = this.ormRepository.findOne({
      where: {
        title
      }
    });
    return findExam;
  }

  async delete(id) {
    const deleteResult = await this.ormRepository.delete(id);
    return deleteResult;
  }

  async update(id, data) {
    const examUpdate = await this.ormRepository.update(id, data);
    return examUpdate;
  }

}

var _default = ExamRepository;
exports.default = _default;