import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import AppError from '@shared/errors/AppError';

import UserAnswer from '../infra/typeorm/entities/UserAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IRequest {
  user_agreement_id: number;
  question_id: number;
  score: number;
  isClass: boolean;
  class_id: number;
}

@injectable()
class CreateUserAnswerService {
  constructor(
    @inject('UserAnswerRepository')
    private userAnswerRepository: IUserAnswerRepository,
    @inject('UserAnswerClassRepository')
    private userAnswerClassRepository: IUserAnswerClassRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
  ) {}

  public async execute({
    user_agreement_id,
    question_id,
    score,
    isClass,
    class_id,
  }: IRequest): Promise<UserAnswer | UserAnswerClass> {
    // não é atrelado a disciplina apenas responder
    if (!isClass) {
      const userAnswer = await this.userAnswerRepository.create({
        question_id,
        user_agreement_id,
        score,
        comment: 'commente test',
      });
      return userAnswer;
    }

    // se é atrelado a disciplna

    const userAnswer = await this.userAnswerRepository.create({
      question_id,
      user_agreement_id,
      score: 1,
      comment: 'undefined',
    });

    const userAnswerClass = await this.userAnswerClassRepository.create({
      user_answer_id: userAnswer.id,
      class_id,
      score,
      comment: ' undefined',
    });

    return userAnswerClass;
  }
}

export default CreateUserAnswerService;
