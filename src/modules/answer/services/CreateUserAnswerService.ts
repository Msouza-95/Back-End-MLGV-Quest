import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import IExamRepository from '@modules/exam/repositories/IExamRepository';
import AppError from '@shared/errors/AppError';
import app from '@shared/infra/http/app';

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

interface IRequest {
  answer: IAnswer[];
  comment: string;
  user_id: number;
}

interface IResponse {
  exam: string;
  codigo: number;
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
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute({
    answer,
    comment,
    user_id,
  }: IRequest): Promise<IResponse> {
    console.log(answer[0].class_id);
    const { agreement_id } = answer[0];
    const agreement = await this.userAgreementRepository.findByID(agreement_id);

    if (!agreement) {
      throw new AppError('Agrement not exists');
    }
    if (agreement.user_id === user_id) {
      if (agreement.uuid) {
        throw new AppError('User já respondeu exam!', 402);
      }
    }
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
          class_id: 7, // 19 serve 7 localhost
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

    await this.userAgreementRepository.comment(agreement_id, comment, uuid);

    const agreementt = await this.userAgreementRepository.findByID(
      agreement_id,
    );

    if (!agreementt) {
      throw new AppError('Agreement not exists');
    }

    const exam = await this.examRepository.findById(agreementt.exam_id);

    if (!exam) {
      throw new AppError('exam not exist');
    }
    return { exam: exam?.title, codigo: rondom };
  }
}

export default CreateUserAnswerService;
