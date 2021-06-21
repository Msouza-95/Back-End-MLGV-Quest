import { getRepository, Repository } from 'typeorm';

import ICreateUserAgreement from '@modules/answer/dtos/ICreateUserAgreement';
import IUserAgreementRepository from '@modules/answer/repositories/IUserAgreementRepository';

import UserAgreement from '../entities/UserAgreement';

class UserAgreementRepository implements IUserAgreementRepository {
  private ormRepository: Repository<UserAgreement>;

  constructor() {
    this.ormRepository = getRepository(UserAgreement);
  }
  public async create(data: ICreateUserAgreement): Promise<UserAgreement> {
    const newAgreement = this.ormRepository.create(data);
    await this.ormRepository.save(newAgreement);

    return newAgreement;
  }
  public async findByID(id: number): Promise<UserAgreement | undefined> {
    const findAgreement = this.ormRepository.findOne(id);

    return findAgreement;
  }
}

export default UserAgreementRepository;
