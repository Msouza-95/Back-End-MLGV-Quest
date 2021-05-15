import { container } from 'tsyringe';

import ExamQuestionGroupRepository from '@modules/exam/infra/typeorm/repositories/ExamQuestionGroupRepository';
import ExamRepository from '@modules/exam/infra/typeorm/repositories/ExamRepository';
import QuestionGroupRepository from '@modules/exam/infra/typeorm/repositories/QuestionGroupRepository';
import QuestionRepository from '@modules/exam/infra/typeorm/repositories/QuestionRepository';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import IExamRepository from '@modules/exam/repositories/IExamRepository';
import IQuestionGroupRepository from '@modules/exam/repositories/IQuestionGroupRepository';
import IQuestionRepository from '@modules/exam/repositories/IQuestionRepository';
import AuthRepository from '@modules/user/infra/typeorm/repositories/AuthRepository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';
import IAuthRepository from '@modules/user/repositories/IAuthRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';

container.registerSingleton<IAuthRepository>('AuthRepository', AuthRepository);

container.registerSingleton<IUserRepository>('UserRepository', UserRepository);

container.registerSingleton<IExamRepository>('ExamRepository', ExamRepository);

container.registerSingleton<IQuestionRepository>(
  'QuestionRepository',
  QuestionRepository,
);

container.registerSingleton<IQuestionGroupRepository>(
  'QuestionGroupRepository',
  QuestionGroupRepository,
);

container.registerSingleton<IExamQuestionGroupRepository>(
  'ExamQuestionGroupRepository',
  ExamQuestionGroupRepository,
);
