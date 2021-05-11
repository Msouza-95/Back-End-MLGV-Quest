import { inject, injectable } from 'tsyringe';

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
