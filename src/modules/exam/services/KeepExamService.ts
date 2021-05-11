import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IExamRepository from '../repositories/IExamRepository';

interface IResponse {
  id: number;
  message: string;
}
interface IRequest {
  operation: string;
  title?: string;
  description?: string;
  started_at?: Date;
  ended_at?: Date;
  allow_anonymous?: number;
}
// Service responsavel por realizar as operações de delete e update
@injectable()
class keepExamService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}
  public async execute(
    id: number,
    {
      operation,
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    }: IRequest,
  ): Promise<IResponse> {
    const findExam = await this.examRepository.findById(id);

    if (!findExam) {
      throw new AppError(' invalid id parameter id');
    }

    if (operation === 'DELETE') {
      const examDeleted = await this.examRepository.delete(id);

      return {
        id,
        message: 'Delete success',
      };
    }

    if (operation === 'UPDATE') {
      if (
        title &&
        description &&
        started_at &&
        ended_at &&
        allow_anonymous !== undefined
      ) {
        const examUpdate = await this.examRepository.update(id, {
          title,
          description,
          started_at,
          ended_at,
          allow_anonymous,
        });
      }
    }
    return {
      id,
      message: 'update success',
    };
  }
}

export default keepExamService;
