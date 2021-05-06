import AuthRepository from '@modules/user/infra/typeorm/repositories/AuthRepository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';
import IAuthRepository from '@modules/user/repositories/IAuthRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);
container.registerSingleton<IAuthRepository>('AuthRepository', AuthRepository);
