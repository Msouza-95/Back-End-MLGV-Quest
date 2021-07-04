import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import AppError from '@shared/errors/AppError';

import UserAnswer from '../infra/typeorm/entities/UserAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IRequests {
  user_agreement_id: number;
  question_id: number;
  score: number;
  isClass: boolean;
  class_id?: number;
}

interface IRequest {
  answer: [];
  comment: string;
}

interface IResponse {
  answer: [];
  comment: string;
}

@injectable()
class CreateUserAnswerService {
  constructor(
    @inject('UserAnswerRepository')
    private userAnswerRepository: IUserAnswerRepository,
    @inject('UserAnswerClassRepository')
    private userAnswerClassRepository: IUserAnswerClassRepository,
  ) {}

  public async execute(
    /* {
    user_agreement_id,
    question_id,
    score,
    isClass,
    class_id,
  }: IRequest */ {
      answer,
      comment,
    }: IRequest,
  ): Promise</* UserAnswer | UserAnswerClass */ IResponse> {
    // não é atrelado a disciplina apenas responder
    // if (!isClass) {
    //   const userAnswer = await this.userAnswerRepository.create({
    //     question_id,
    //     user_agreement_id,
    //     score,
    //   });

    //   console.log(userAnswer.id);
    //   return userAnswer;
    // }

    // // se é atrelado a disciplna

    // const userAnswer = await this.userAnswerRepository.create({
    //   question_id,
    //   user_agreement_id,
    // });
    // if (!class_id) {
    //   throw new AppError('class_id ');
    // }
    // const userAnswerClass = await this.userAnswerClassRepository.create({
    //   user_answer_id: userAnswer.id,
    //   class_id,
    //   score,
    // });

    // criar add
    // if (!this.id) {
    //   const rondom = Math.floor(Math.random() * 10000000000);
    //   this.uuid = String(rondom);
    // }
    return { answer, comment };
  }
}

export default CreateUserAnswerService;
