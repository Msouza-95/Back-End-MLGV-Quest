import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswerClass from '@modules/answer/dtos/ICreateUserAnswerClass';
import IUserAnswerClassRepository from '@modules/answer/repositories/IUserAnswerClassRepository';

import UserAnswerClass from '../entities/UserAnswerClass';

class UserAnswerClassRepository implements IUserAnswerClassRepository {
  private ormRepository: Repository<UserAnswerClassRepository>;

  constructor() {
    this.ormRepository = getRepository(UserAnswerClassRepository);
  }
  create(data: ICreateUserAnswerClass): Promise<UserAnswerClass> {
    throw new Error('Method not implemented.');
  }
  findByID(id: number): Promise<UserAnswerClass | undefined> {
    throw new Error('Method not implemented.');
  }
}

export default UserAnswerClassRepository;
