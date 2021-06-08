import { getRepository, Repository } from 'typeorm';

import ICreateUserAgreement from '@modules/answer/dtos/ICreateUserAgreement';
import IUserAgreementRepository from '@modules/answer/repositories/IUserAgreementRepository';

import UserAgreement from '../entities/UserAgreement';

class UserAgreementRepository implements IUserAgreementRepository {
  private ormRepository: Repository<UserAgreement>;

  constructor() {
    this.ormRepository = getRepository(UserAgreement);
  }
  create(data: ICreateUserAgreement): Promise<UserAgreement> {
    throw new Error('Method not implemented.');
  }
  findByID(id: number): Promise<UserAgreement | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default UserAgreementRepository;
