"use strict";

var _FakeExamRepository = _interopRequireDefault(require("../../repositories/fake/FakeExamRepository"));

var _AppError = _interopRequireDefault(require("../../../../shared/errors/AppError"));

var _CreateExamService = _interopRequireDefault(require("../CreateExamService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let fakeExamRepository;
let createExamService;
describe('CreateExam', () => {
  beforeEach(() => {
    fakeExamRepository = new _FakeExamRepository.default();
    createExamService = new _CreateExamService.default(fakeExamRepository);
  });
  it(' should be able to create a new Exam', async () => {
    const newExam = await createExamService.execute({
      title: 'TITULO',
      description: 'DESCRIÇÃO ',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
      period_id: 1
    });
    expect(newExam).toHaveProperty('id');
  });
  it('should not able  to create Exam exists', async () => {
    createExamService.execute({
      title: 'TITULO',
      description: 'DESCRIÇÃO ',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
      period_id: 1
    });
    expect(createExamService.execute({
      title: 'TITULO',
      description: 'DESCRIÇÃO ',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
      period_id: 1
    })).rejects.toBeInstanceOf(_AppError.default);
  });
});