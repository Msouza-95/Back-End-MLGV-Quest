import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  operation: string;
  statement?: string;
  image_url?: string;
  image_alt?: string;
  required?: boolean;
}
interface IResponse {
  id: number;
  message: string;
}

@injectable()
class KeepQuestionService {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}
  public async execute(
    id: number,
    { operation, statement, image_url, image_alt, required }: IRequest,
  ): Promise<IResponse> {
    const question = await this.questionRepository.findById(id);

    if (!question) {
      throw new AppError(' invalid id parameter ');
    }

    if (operation === 'DELETE') {
      const questionGroupDeleted = await this.questionRepository.delete(id);
      return {
        id,
        message: 'Delete success',
      };
    }

    if (operation === 'UPDATE') {
      console.log(id);
      console.log(statement);
      console.log(image_url);
      console.log(image_alt);
      console.log(required);

      if (statement && required !== undefined) {
        console.log('-------');
        const questionGroup = await this.questionRepository.upadate(id, {
          statement,
          image_url,
          image_alt,
          required,
        });

        console.log('-------');
        console.log(questionGroup);
      }
    }
    return {
      id,
      message: 'update success',
    };
  }
}

export default KeepQuestionService;
