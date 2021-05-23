"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeorm = require("typeorm");

var _Exam = _interopRequireDefault(require("../../infra/typeorm/entities/Exam"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class FakeExamRepository {
  constructor() {
    this.exams = [];
  }

  async create(data) {
    const nextId = this.exams.length + 1;
    const newExam = new _Exam.default();
    Object.assign(newExam, {
      id: nextId
    }, data);
    this.exams.push(newExam);
    return newExam;
  }

  async findById(id) {
    const findExam = this.exams.find(exam => exam.id === id);
    return findExam;
  }

  async findByTitle(title) {
    const findExam = this.exams.find(exam => exam.title === title);
    return findExam;
  }

  async index() {
    return this.exams;
  }

  async delete(id) {
    const index = this.exams.findIndex(exam => exam.id === id);
    this.exams.splice(index, 1);
    const deletes = new _typeorm.DeleteResult();
    return deletes;
  }

  async update(id, data) {
    throw new Error('Method not implemented de update exam');
  }

}

var _default = FakeExamRepository;
exports.default = _default;