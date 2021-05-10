import FakeExamRepository from '@modules/exam/repositories/fake/FakeExamRepository';

import CreateExamService from '../CreateExamService';

let fakeExamRepository: FakeExamRepository;
let createExamService: CreateExamService;

describe('CreateExam', () => {
  beforeEach(() => {
    fakeExamRepository = new FakeExamRepository();
    createExamService = new CreateExamService(fakeExamRepository);
  });
  it(' should be albe to create a new Exam', async () => {
    const newExam = await createExamService.execute({
      title: 'TITULO',
      description: 'DESCRIÇÃO ',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
      period_id: 1,
    });

    expect(newExam).toHaveProperty('id');
  });
});
