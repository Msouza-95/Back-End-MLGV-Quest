import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import app from '@shared/infra/http/app';

import User from '../infra/typeorm/entities/User';
import IAuthRepository from '../repositories/IAuthRepository';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
  enrollment: string;
  type: string;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('AuthRepository')
    private authRepository: IAuthRepository,
  ) {}

  public async execute({
    email,
    password,
    enrollment,
    type,
  }: IRequest): Promise<User> {
    const findUser = await this.userRepository.findByEmail(email);

    if (findUser) {
      throw new AppError('User Aready Exists');
    }
    const newUser = await this.userRepository.create({
      email,
      enrollment,
      type,
    });

    const newAuth = await this.authRepository.create(newUser.id, password);
    if (newAuth) {
      return newUser;
    }
    throw new AppError('user erro');
  }
}
export default CreateUserService;
