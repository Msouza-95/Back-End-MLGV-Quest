import ICreateUserAgreement from '@modules/answer/dtos/ICreateUserAgreement';
import UserAgreement from '@modules/answer/infra/typeorm/entities/UserAgreement';

import IUserAgreementRepository from '../IUserAgreementRepository';

class FakeUserAgreementRepository implements IUserAgreementRepository {
  private userAgreements: UserAgreement[] = [];

  public async create(data: ICreateUserAgreement): Promise<UserAgreement> {
    const nextID = this.userAgreements.length + 1;
    const newUserAgreement = new UserAgreement();

    Object.assign(newUserAgreement, { id: nextID }, data);

    this.userAgreements.push(newUserAgreement);

    return newUserAgreement;
  }
  public async findByID(id: number): Promise<UserAgreement | undefined> {
    const findUserAgreement = this.userAgreements.find(
      userAgreement => userAgreement.id === id,
    );

    return findUserAgreement;
  }
}

export default FakeUserAgreementRepository;
