import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  title: string;
  classs: number;
}

@injectable()
class CreateQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
  ) {}
  public async execute({ title, classs }: IRequest): Promise<QuestionGroup> {
    const findGroup = await this.questionGroupRepository.findTitle(title);

    if (findGroup) {
      throw new AppError('QuestionGroup aready exists');
    }

    const newQuestionGroup = await this.questionGroupRepository.create({
      title,
      classs,
    });

    return newQuestionGroup;
  }
}

export default CreateQuestionGroupService;
