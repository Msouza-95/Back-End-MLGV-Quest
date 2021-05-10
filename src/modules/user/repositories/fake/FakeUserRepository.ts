import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import User from '@modules/user/infra/typeorm/entities/User';

import IUserRepository from '../IUserRepository';

class FakeUserRepository implements IUserRepository {
  create(data: ICreateUserDTO): Promise<User> {
    throw new Error('Method not implemented.');
  }
  private users: User[] = [];

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find(user => user.email === email);
    return findUser;
  }
}

export default FakeUserRepository;
