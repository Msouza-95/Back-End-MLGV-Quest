import FakeExamQuestionGroupRepository from '@modules/exam/repositories/fake/FakeExamQuestionGroupRepository';
import FakeExamRepository from '@modules/exam/repositories/fake/FakeExamRepository';
import FakeQuestionGroupRepository from '@modules/exam/repositories/fake/FakeQuestionGroupRepository';
import FakeQuestionRepository from '@modules/exam/repositories/fake/FakeQuestionRepository';

import CreateQuestionService from '../CreateQuestionService';

let fakequestionRepository: FakeQuestionRepository;
let fakeExamQuestionGroupRepository: FakeExamQuestionGroupRepository;
let fakeExamRepository: FakeExamRepository;
let fakeQuestionGroupRepository: FakeQuestionGroupRepository;
let createQuestionService: CreateQuestionService;

describe('CreateQuestion', () => {
  beforeEach(() => {
    fakequestionRepository = new FakeQuestionRepository();
    fakeExamQuestionGroupRepository = new FakeExamQuestionGroupRepository();
    fakeExamRepository = new FakeExamRepository();
    fakeQuestionGroupRepository = new FakeQuestionGroupRepository();
    createQuestionService = new CreateQuestionService(
      fakeExamRepository,
      fakequestionRepository,
      fakeQuestionGroupRepository,
      fakeExamQuestionGroupRepository,
    );
  });
  it(' should be albe to create a new Question', async () => {
    const exam = await fakeExamRepository.create({
      title: 'exam',
      description: 'description',
      started_at: new Date(),
      ended_at: new Date(),
      allow_anonymous: 1,
    });

    const questionGroup = await fakeQuestionGroupRepository.create({
      title: 'Group',
      classs: 1,
    });

    const newQuestion = await createQuestionService.execute({
      statement: 'statement test',
      image_url: 'url 1',
      image_alt: 'url 2',
      required: true,
      question_group_id: questionGroup.id,
      exam_id: exam.id,
    });

    expect(newQuestion).toHaveProperty('id');
  });
});
