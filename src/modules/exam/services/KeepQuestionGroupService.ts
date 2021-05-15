import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  operation: string;
  title?: string;
  classs?: number;
}
interface IResponse {
  id: number;
  message: string;
}

@injectable()
class KeepQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
  ) {}
  public async execute(
    id: number,
    { operation, title, classs }: IRequest,
  ): Promise<IResponse> {
    const questionGroup = await this.questionGroupRepository.findById(id);

    if (!questionGroup) {
      throw new AppError(' invalid id parameter ');
    }

    if (operation === 'DELETE') {
      const questionGroupDeleted = await this.questionGroupRepository.delete(
        id,
      );
      return {
        id,
        message: 'Delete success',
      };
    }

    if (operation === 'UPDATE') {
      if (title && classs !== undefined) {
        const questionGroup = await this.questionGroupRepository.upadate(id, {
          title,
          classs,
        });
      }
    }
    return {
      id,
      message: 'update success',
    };
  }
}

export default KeepQuestionGroupService;
