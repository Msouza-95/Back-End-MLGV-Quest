import FakeUserAgreementRepository from '@modules/answer/repositories/fake/FakeUserAgreementRepository';
import FakeUserAnswerClassRepository from '@modules/answer/repositories/fake/FakeUserAnswerClassRepository';
import FakeUserAnswerRepository from '@modules/answer/repositories/fake/FakeUserAnswerRepository';

import CreateUserAnswerService from '../CreateUserAnswerService';

let fakeUserAgreementRepository: FakeUserAgreementRepository;
let fakeUserAnswerRepository: FakeUserAnswerRepository;
let fakeUserAnswerClassRepository: FakeUserAnswerClassRepository;
let createUserAnswerService: CreateUserAnswerService;

describe('CreateUserAnswer', () => {
  beforeEach(() => {
    fakeUserAgreementRepository = new FakeUserAgreementRepository();
    fakeUserAnswerClassRepository = new FakeUserAnswerClassRepository();
    fakeUserAnswerRepository = new FakeUserAnswerRepository();
    createUserAnswerService = new CreateUserAnswerService(
      fakeUserAnswerRepository,
      fakeUserAgreementRepository,
      fakeUserAnswerClassRepository,
    );
  });

  it(' should be able to create a new UserAnswer', async () => {
    const newUserAnswer = await createUserAnswerService.execute({
      isClass: false,
      exam_id: 1,
      user_id: 1,
      question_id: 2,
      anoymous: true,
      score: 10.0,
      class_id: 3,
    });

    expect(newUserAnswer).toHaveProperty('id');
  });
});
