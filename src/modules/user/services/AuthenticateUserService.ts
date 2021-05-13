import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import auths from '@config/auths';
import AppError from '@shared/errors/AppError';

import IAuthRepository from '../repositories/IAuthRepository';
import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    type: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('AuthRepository')
    private authRepository: IAuthRepository,
  ) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    // usuario existe
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or password incorrect');
    }

    // bucas senha a tabela auth

    const auth = await this.authRepository.findByUserID(user.id);

    if (!auth) {
      throw new AppError('Email or password incorrect');
    }

    // comparar senha

    if (password !== auth.password) {
      throw new AppError('Email or password incorrect');
    }

    // const passwordMatch = await compare(password, auth.password);

    // if (!passwordMatch) {
    //   throw new AppError('Email or password incorrect');
    // }
    // senha está correnta gerar jsonwebtoken

    const { secret, expiresIn } = auths.jwt;

    const token = sign({}, secret, {
      subject: String(user.id),
      expiresIn,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
