import { NextFunction, Request, Response } from 'express';

import AppError from '@shared/errors/AppError';

import User from '../../typeorm/entities/User';
import UserRepository from '../../typeorm/repositories/UserRepository';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const { id } = request.user;

  const userRepository = new UserRepository();

  const user = await userRepository.findById(Number(id));

  if (user?.type !== 'manager') {
    throw new AppError('User não é admin');
  }

  return next();
}
