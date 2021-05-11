import { inject, injectable } from 'tsyringe';
import { DeleteResult } from 'typeorm';

import AppError from '@shared/errors/AppError';

import Exam from '../infra/typeorm/entities/Exam';
import IExamRepository from '../repositories/IExamRepository';

interface IResponse {
  id: number;
  message: string;
}

@injectable()
class DeleteExamService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}
  public async execute(id: number): Promise<IResponse> {
    const findExam = await this.examRepository.findById(id);

    if (!findExam) {
      throw new AppError(' invalid id parameter id');
    }
    const examDeleted = await this.examRepository.delete(id);

    return {
      id,
      message: 'Delete success',
    };
  }
}

export default DeleteExamService;
