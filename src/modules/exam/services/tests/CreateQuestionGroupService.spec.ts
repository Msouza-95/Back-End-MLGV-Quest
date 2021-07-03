import FakeExamQuestionGroupRepository from '@modules/exam/repositories/fake/FakeExamQuestionGroupRepository';
import FakeQuestionGroupRepository from '@modules/exam/repositories/fake/FakeQuestionGroupRepository';

import CreateQuestionGroupService from '../CreateQuestionGroupService';

let fakeQuestionGroupRepository: FakeQuestionGroupRepository;
let createQuestionGroupService: CreateQuestionGroupService;
let fakeExamQuestionGroupRepository: FakeExamQuestionGroupRepository;

describe('CreateQuenstionGroup', () => {
  beforeEach(() => {
    fakeQuestionGroupRepository = new FakeQuestionGroupRepository();
    fakeExamQuestionGroupRepository = new FakeExamQuestionGroupRepository();
    createQuestionGroupService = new CreateQuestionGroupService(
      fakeQuestionGroupRepository,
      fakeExamQuestionGroupRepository,
    );
  });

  it(' should be albe to create a new Exam', async () => {
    const newQuestionGroup = await createQuestionGroupService.execute({
      title: 'title exemple',
      classs: true,
      exam_id: 1,
    });

    expect(newQuestionGroup).toHaveProperty('id');
  });
});
