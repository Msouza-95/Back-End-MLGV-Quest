import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import User from '../infra/typeorm/entities/User';
import IUserRepository from '../repositories/IUserRepository';

@injectable()
class ShowUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(): Promise<User[]> {
    const findUser = await this.userRepository.findAll();

    return findUser;
  }
}
export default ShowUserService;
