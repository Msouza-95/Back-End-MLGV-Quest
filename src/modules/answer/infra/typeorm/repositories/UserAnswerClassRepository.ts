import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswerClass from '@modules/answer/dtos/ICreateUserAnswerClass';
import IUserAnswerClassRepository from '@modules/answer/repositories/IUserAnswerClassRepository';

import UserAnswerClass from '../entities/UserAnswerClass';

class UserAnswerClassRepository implements IUserAnswerClassRepository {
  private ormRepository: Repository<UserAnswerClass>;

  constructor() {
    this.ormRepository = getRepository(UserAnswerClass);
  }
  public async create(data: ICreateUserAnswerClass): Promise<UserAnswerClass> {
    const newAnswerClass = this.ormRepository.create(data);

    await this.ormRepository.save(newAnswerClass);
    return newAnswerClass;
  }
  public async findByID(id: number): Promise<UserAnswerClass | undefined> {
    const findAnswerClass = await this.ormRepository.findOne({ where: { id } });

    return findAnswerClass;
  }
}

export default UserAnswerClassRepository;
