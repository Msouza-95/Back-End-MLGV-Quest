import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import AppError from '@shared/errors/AppError';

import UserAnswer from '../infra/typeorm/entities/UserAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';
import IUserAgreementRepository from '../repositories/IUserAgreementRepository';
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
    @inject('UserAgreementRepository')
    private userAgreementRepository: IUserAgreementRepository,
  ) {}

  public async execute({ answer, comment }: IResponse): Promise<void> {
    const { agreement_id } = answer[0];
    const promiseAnswer = answer.map(async wer => {
      if (!wer.isClass) {
        console.log('cartola');
        const userAnswer = await this.userAnswerRepository.create({
          question_id: wer.question_id,
          user_agreement_id: wer.agreement_id,
          score: wer.score,
        });

        const userAnswerClass = await this.userAnswerClassRepository.create({
          user_answer_id: userAnswer.id,
          class_id: 23,
          score: wer.score,
        });
      } else {
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

    const rondom = Math.floor(Math.random() * 10000000000);
    const uuid = String(rondom);

    const agreement = await this.userAgreementRepository.comment(
      agreement_id,
      comment,
      uuid,
    );
  }
}

export default CreateUserAnswerService;
