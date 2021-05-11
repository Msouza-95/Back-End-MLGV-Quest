import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Exam from '../infra/typeorm/entities/Exam';
import IExamRepository from '../repositories/IExamRepository';

@injectable()
class ShowExamService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}
  public async execute(): Promise<Exam[]> {
    const exams = await this.examRepository.index();

    return exams;
  }
}

export default ShowExamService;
