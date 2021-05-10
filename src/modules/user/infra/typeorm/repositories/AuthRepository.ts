import { getRepository, Repository } from 'typeorm';

import IAuthRepository from '@modules/user/repositories/IAuthRepository';

import Auth from '../entities/Auth';

export default class AuthRepository implements IAuthRepository {
  private ormRepository: Repository<Auth>;

  constructor() {
    this.ormRepository = getRepository(Auth);
  }
  public async create(user_id: number, password: string): Promise<Auth> {
    const newAthu = this.ormRepository.create({ user_id, password });
    await this.ormRepository.save(newAthu);

    return newAthu;
  }
  public async findByUserID(user_id: number): Promise<Auth | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { user_id } });
    return findUser;
  }
}
