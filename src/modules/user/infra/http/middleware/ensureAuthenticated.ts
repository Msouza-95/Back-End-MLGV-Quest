import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auths';
import AppError from '@shared/errors/AppError';

import UserRepository from '../../typeorm/repositories/UserRepository';

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('Token missing', 401);
  }

  const [, token] = authHeader.split(' ');
  try {
    const { sub: user_id } = verify(token, authConfig.jwt.secret) as IPayload;

    // const userRepository = new UserRepository();
    // const user = await userRepository.findById(Number(user_id));

    request.user = {
      id: user_id,
    };

    if (!request.user) {
      throw new AppError('user does not exists');
    }

    next();
  } catch {
    throw new AppError('Invalid token', 401);
  }
}
