import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import UserAnswer from '../infra/typeorm/entities/UserAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IRequest {
  exam_id: number;
  user_id: number;
  param: string;
}
@injectable()
class ShowAnswerService {
  constructor(
    @inject('UserAnswerRepository')
    private userAnswerRepository: IUserAnswerRepository,
    @inject('UserAnswerClassRepository')
    private userAnswerClassRepository: IUserAnswerClassRepository,
  ) {}

  public async execute({
    exam_id,
    user_id,
    param,
  }: IRequest): Promise<UserAnswer | UserAnswerClass> {
    if (param === 'answerClass') {
      console.log('teste');
      const answerClass = await this.userAnswerClassRepository.findAll({
        exam_id,
        user_id,
      });

      return answerClass;
    }

    const answer = await this.userAnswerRepository.findAll({
      exam_id,
      user_id,
    });

    return answer;
  }
}

export default ShowAnswerService;
