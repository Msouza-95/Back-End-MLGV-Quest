import FakeQuestionRepository from '@modules/exam/repositories/fake/FakeQuestionRepository';

import CreateQuestionService from '../CreateQuestionService';

let fakequestionRepository: FakeQuestionRepository;
let createQuestionService: CreateQuestionService;

describe('CreateQuestion', () => {
  beforeEach(() => {
    fakequestionRepository = new FakeQuestionRepository();
    createQuestionService = new CreateQuestionService(fakequestionRepository);
  });
  it(' should be albe to create a new Question', async () => {
    const newQuestion = await createQuestionService.execute({
      statement: 'statement test',
      image_ur: 'url 1',
      image_alt: 'url 2',
      required: true,
      exam_question_group_id: 1,
    });

    expect(newQuestion).toHaveProperty('id');
  });
});
