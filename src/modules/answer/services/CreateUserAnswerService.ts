import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import AppError from '@shared/errors/AppError';

import UserAnswer from '../infra/typeorm/entities/UserAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IAnswer {
  agreement_id: number;
  score: number;
  isClass: boolean;
  question_id: number;
  class_id?: number;
}

interface IResponse {
  answer: IAnswer[];
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

  public async execute({ answer, comment }: IResponse): Promise<void> {
    const promiseAnswer = answer.map(async wer => {
      if (!wer.isClass) {
        console.log('cartola');
        const userAnswer = await this.userAnswerRepository.create({
          question_id: wer.question_id,
          user_agreement_id: wer.agreement_id,
          score: wer.score,
        });
      } else {
        console.log('aqui não');
        const userAnswer = await this.userAnswerRepository.create({
          question_id: wer.question_id,
          user_agreement_id: wer.agreement_id,
        });
        if (!wer.class_id) {
          throw new AppError('class_id not existe');
        }
        const userAnswerClass = await this.userAnswerClassRepository.create({
          user_answer_id: userAnswer.id,
          class_id: wer.class_id,
          score: wer.score,
        });
      }
    });
    await Promise.all(promiseAnswer);
  }
}

export default CreateUserAnswerService;
