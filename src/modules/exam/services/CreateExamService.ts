import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Exam from '../infra/typeorm/entities/Exam';
import IExamRepository from '../repositories/IExamRepository';

interface IRequest {
  title: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  allow_anonymous: number;
  period_id: number;
}
@injectable()
class CreateExamService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}
  public async execute({
    title,
    description,
    started_at,
    ended_at,
    allow_anonymous,
    period_id,
  }: IRequest): Promise<Exam> {
    const findExam = await this.examRepository.findByTitle(title);

    if (findExam) {
      throw new AppError('Name Exam exists', 401);
    }

    if (started_at > ended_at) {
      throw new AppError('Start date cannot be greater than an end!');
    }
    const createExam = await this.examRepository.create({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
      period_id,
    });

    return createExam;
  }
}

export default CreateExamService;
