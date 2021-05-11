import FakeExamRepository from '@modules/exam/repositories/fake/FakeExamRepository';
import AppError from '@shared/errors/AppError';

import CreateExamService from '../CreateExamService';

let fakeExamRepository: FakeExamRepository;
let createExamService: CreateExamService;

describe('CreateExam', () => {
  beforeEach(() => {
    fakeExamRepository = new FakeExamRepository();
    createExamService = new CreateExamService(fakeExamRepository);
  });
  it(' should be able to create a new Exam', async () => {
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

  it('should not able  to create Exam exists', async () => {
    createExamService.execute({
      title: 'TITULO',
      description: 'DESCRIÇÃO ',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
      period_id: 1,
    });

    expect(
      createExamService.execute({
        title: 'TITULO',
        description: 'DESCRIÇÃO ',
        started_at: new Date(),
        ended_at: new Date(),
        allow_anonymous: 1,
        period_id: 1,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
