import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ICreateUserAgreement from '../dtos/ICreateUserAgreement';
import UserAgreement from '../infra/typeorm/entities/UserAgreement';
import IUserAgreementRepository from '../repositories/IUserAgreementRepository';

@injectable()
class CreateUserAgreementService {
  constructor(
    @inject('UserAgreementRepository')
    private userAgreementRepository: IUserAgreementRepository,
  ) {}

  public async execute({
    exam_id,
    user_id,
    anoymous,
  }: ICreateUserAgreement): Promise<UserAgreement> {
    // preciso verificar se user já respondeu essa exam

    const findUserAgreement = await this.userAgreementRepository.findByExamID(
      exam_id,
    );

    if (findUserAgreement) {
      throw new AppError('User já respondeu Avaliação', 401);
    }

    const newUserAgreement = this.userAgreementRepository.create({
      exam_id,
      user_id,
      anoymous,
    });

    return newUserAgreement;
  }
}

export default CreateUserAgreementService;
