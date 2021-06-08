import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswer from '@modules/answer/dtos/ICreateUserAnswer';
import IUserAnswerRepository from '@modules/answer/repositories/IUserAnswerRepository';

import UserAnswer from '../entities/UserAnswer';

class UserAnswerRepository implements IUserAnswerRepository {
  private ormRepository: Repository<UserAnswer>;

  constructor() {
    this.ormRepository = getRepository(UserAnswer);
  }
  create(data: ICreateUserAnswer): Promise<UserAnswer> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<UserAnswer | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default UserAnswerRepository;
