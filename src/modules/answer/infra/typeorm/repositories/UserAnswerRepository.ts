import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswer from '@modules/answer/dtos/ICreateUserAnswer';
import IUserAnswerRepository from '@modules/answer/repositories/IUserAnswerRepository';

import UserAnswer from '../entities/UserAnswer';

class UserAnswerRepository implements IUserAnswerRepository {
  private ormRepository: Repository<UserAnswer>;

  constructor() {
    this.ormRepository = getRepository(UserAnswer);
  }
  public async create(data: ICreateUserAnswer): Promise<UserAnswer> {
    const newUserAnswer = this.ormRepository.create(data);

    await this.ormRepository.save(newUserAnswer);

    return newUserAnswer;
  }
  public async findById(id: number): Promise<UserAnswer | undefined> {
    const findAnswer = await this.ormRepository.findOne({ where: { id } });

    return findAnswer;
  }
}

export default UserAnswerRepository;
