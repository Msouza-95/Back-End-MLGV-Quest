import User from '@modules/user/infra/typeorm/entities/User';

import IUserRepository from '../IUserRepository';

class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }
}

export default FakeUserRepository;
