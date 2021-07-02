import FakeUserAgreementRepository from '@modules/answer/repositories/fake/FakeUserAgreementRepository';
import FakeUserAnswerClassRepository from '@modules/answer/repositories/fake/FakeUserAnswerClassRepository';
import FakeUserAnswerRepository from '@modules/answer/repositories/fake/FakeUserAnswerRepository';

import CreateUserAnswerService from '../CreateUserAnswerService';

let fakeUserAnswerRepository: FakeUserAnswerRepository;
let fakeUserAnswerClassRepository: FakeUserAnswerClassRepository;
let createUserAnswerService: CreateUserAnswerService;

describe('CreateUserAnswer', () => {
  beforeEach(() => {
    fakeUserAnswerClassRepository = new FakeUserAnswerClassRepository();
    fakeUserAnswerRepository = new FakeUserAnswerRepository();
    createUserAnswerService = new CreateUserAnswerService(
      fakeUserAnswerRepository,
      fakeUserAnswerClassRepository,
    );
  });

  it(' should be able to create a new UserAnswer', async () => {
    const newUserAnswer = await createUserAnswerService.execute({
      user_agreement_id: 1,
      question_id: 1,
      score: 1,
      isClass: true,
      class_id: 1,
    });

    expect(newUserAnswer).toHaveProperty('id');
  });
});
