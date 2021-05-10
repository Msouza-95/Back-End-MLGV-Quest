import FakeQuestionGroupRepository from '@modules/exam/repositories/fake/FakeQuestionGroupRepository';

import CreateQuestionGroupService from '../CreateQuestionGroupService';

let fakeQuestionGroupRepository: FakeQuestionGroupRepository;
let createQuestionGroupService: CreateQuestionGroupService;

describe('CreateQuenstionGroup', () => {
  beforeEach(() => {
    fakeQuestionGroupRepository = new FakeQuestionGroupRepository();
    createQuestionGroupService = new CreateQuestionGroupService(
      fakeQuestionGroupRepository,
    );
  });
  it(' should be albe to create a new Exam', async () => {
    const newQuestionGroup = await createQuestionGroupService.execute({
      title: 'title exemple',
      classs: true,
    });

    expect(newQuestionGroup).toHaveProperty('id');
  });
});
