import FakeUserAgreementRepository from '@modules/answer/repositories/fake/FakeUserAgreementRepository';

import CreateUserAgreementService from '../CreateUserAgreementService';

let fakeUserAgreementRepository: FakeUserAgreementRepository;
let createUserAgreementService: CreateUserAgreementService;

describe('CreateUserAnswer', () => {
  beforeEach(() => {
    fakeUserAgreementRepository = new FakeUserAgreementRepository();

    createUserAgreementService = new CreateUserAgreementService(
      fakeUserAgreementRepository,
    );
  });

  it(' should be able to create a new UserAnswer', async () => {
    const newAgreement = await createUserAgreementService.execute({
      exam_id: 1,
      user_id: 1,
      anoymous: true,
    });

    expect(newAgreement).toHaveProperty('id');
    expect(newAgreement).toHaveProperty('uuid');
  });
});
