import { getRepository, Repository } from 'typeorm';

import ICreateUserDTO from '@modules/user/dtos/ICreateUserDTO';
import IUserRepository from '@modules/user/repositories/IUserRepository';

import User from '../entities/User';

export default class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create(data: ICreateUserDTO): Promise<User> {
    const newUser = this.ormRepository.create(data);

    await this.ormRepository.save(newUser);

    return newUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne({ where: { email } });
    return findUser;
  }
  public async findById(user_id: number): Promise<User | undefined> {
    const findUser = await this.ormRepository.findOne(user_id);
    return findUser;
  }

  public async findAll(): Promise<User[]> {
    const findUser = await this.ormRepository.find();
    return findUser;
  }
}
