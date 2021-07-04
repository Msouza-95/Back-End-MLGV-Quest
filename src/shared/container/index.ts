import { container } from 'tsyringe';

import UserAgreementRepository from '@modules/answer/infra/typeorm/repositories/UserAgreementRepository';
import UserAnswerClassRepository from '@modules/answer/infra/typeorm/repositories/UserAnswerClassRepository';
import UserAnswerRepository from '@modules/answer/infra/typeorm/repositories/UserAnswerRepository';
import IUserAgreementRepository from '@modules/answer/repositories/IUserAgreementRepository';
import IUserAnswerClassRepository from '@modules/answer/repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '@modules/answer/repositories/IUserAnswerRepository';
import ClassRepository from '@modules/course/infra/typeorm/repositories/ClassRepository';
import CourseRepository from '@modules/course/infra/typeorm/repositories/CourseRepository';
import PeriodRepository from '@modules/course/infra/typeorm/repositories/PeriodRepository';
import ProfessorClassRepository from '@modules/course/infra/typeorm/repositories/ProfessorCLassRepository';
import StudentClassRepository from '@modules/course/infra/typeorm/repositories/StudantClassRepository';
import SubjectRepository from '@modules/course/infra/typeorm/repositories/SubjectRepository';
import IClassRepository from '@modules/course/repositories/IClassRepository';
import ICourseRepository from '@modules/course/repositories/ICourseRepository';
import IPeriodRepository from '@modules/course/repositories/IPeriodRepository';
import IProfessorClassRepository from '@modules/course/repositories/IProfessorClassRepository';
import IStudentClassRepository from '@modules/course/repositories/IStudentClassRepository';
import ISubjectRepository from '@modules/course/repositories/ISubjectRepository';
import ExamQuestionGroupRepository from '@modules/exam/infra/typeorm/repositories/ExamQuestionGroupRepository';
import ExamRepository from '@modules/exam/infra/typeorm/repositories/ExamRepository';
import QuestionGroupRepository from '@modules/exam/infra/typeorm/repositories/QuestionGroupRepository';
import QuestionRepository from '@modules/exam/infra/typeorm/repositories/QuestionRepository';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import IExamRepository from '@modules/exam/repositories/IExamRepository';
import IQuestionGroupRepository from '@modules/exam/repositories/IQuestionGroupRepository';
import IQuestionRepository from '@modules/exam/repositories/IQuestionRepository';
import AuthRepository from '@modules/user/infra/typeorm/repositories/AuthRepository';
import ProfessorRepository from '@modules/user/infra/typeorm/repositories/ProfessorRespository';
import UserRepository from '@modules/user/infra/typeorm/repositories/UserRepository';
import IAuthRepository from '@modules/user/repositories/IAuthRepository';
import IProfessorRepository from '@modules/user/repositories/IProfessorRepository';
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

container.registerSingleton<IUserAgreementRepository>(
  'UserAgreementRepository',
  UserAgreementRepository,
);

container.registerSingleton<IUserAnswerRepository>(
  'UserAnswerRepository',
  UserAnswerRepository,
);

container.registerSingleton<IUserAnswerClassRepository>(
  'UserAnswerClassRepository',
  UserAnswerClassRepository,
);

container.registerSingleton<IProfessorRepository>(
  'ProfessorRepository',
  ProfessorRepository,
);

container.registerSingleton<IProfessorClassRepository>(
  'ProfessorClassRepository',
  ProfessorClassRepository,
);

container.registerSingleton<IStudentClassRepository>(
  'StudentClassRepository',
  StudentClassRepository,
);

container.registerSingleton<IClassRepository>(
  'ClassRepository',
  ClassRepository,
);

container.registerSingleton<ISubjectRepository>(
  'SubjectReposiroty',
  SubjectRepository,
);
container.registerSingleton<IPeriodRepository>(
  'PeriodRepository',
  PeriodRepository,
);

container.registerSingleton<ICourseRepository>(
  'CourseRepository',
  CourseRepository,
);
