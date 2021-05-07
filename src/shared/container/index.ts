import ExamRepository from '@modules/exam/infra/typeorm/repositories/ExamRepository';
import IExamRepository from '@modules/exam/repositories/IExamRepository';
import AuthRepository from '@modules/user/infra/typeorm/repositories/AuthRepository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';
import IAuthRepository from '@modules/user/repositories/IAuthRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';
import { container } from 'tsyringe';

container.registerSingleton<IAuthRepository>('UserRepository', AuthRepository);
container.registerSingleton<IUserRepository>('AuthRepository', UserRepository);
container.registerSingleton<IExamRepository>('ExamRepository', ExamRepository);
