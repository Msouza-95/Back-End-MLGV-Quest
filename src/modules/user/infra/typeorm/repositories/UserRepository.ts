import IUserRepository from '@modules/user/repositories/IUserRepository';
import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }
  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { email } });
    return findUser;
  }
}

export default UserRepository;
