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
  public async execute(id?: number): Promise<Exam[] | Exam> {
    // retorna um exam
    if (id) {
      const exam = await this.examRepository.findById(id);
      if (exam) {
        return exam;
      }
      throw new AppError('exam not exists');
    }

    // retorna all exams
    const exams = await this.examRepository.index();

    return exams;
  }
}

export default ShowExamService;
