import IAuthRepository from '@modules/user/repositories/IAuthRepository';
import { getRepository, Repository } from 'typeorm';

import Auth from '../entities/Auth';

export default class AuthRepository implements IAuthRepository {
  private ormRepository: Repository<Auth>;

  constructor() {
    this.ormRepository = getRepository(Auth);
  }
  public async findByUserID(user_id: number): Promise<Auth | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { user_id } });
    return findUser;
  }
}
