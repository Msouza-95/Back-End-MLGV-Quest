import { getRepository, Repository, UpdateResult } from 'typeorm';

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

  public async findByExamID(
    exam_id: number,
  ): Promise<UserAgreement | undefined> {
    const findAgreement = this.ormRepository.findOne(exam_id);

    return findAgreement;
  }

  public async comment(
    agreement_id: number,
    comment: string,
    uuid: string,
  ): Promise<void> {
    const up = await this.ormRepository.query(
      'UPDATE mlgv_quest.userAgreement SET  comment=?, uuid=? WHERE id=?',
      [comment, uuid, agreement_id],
    );
  }
}

export default UserAgreementRepository;
