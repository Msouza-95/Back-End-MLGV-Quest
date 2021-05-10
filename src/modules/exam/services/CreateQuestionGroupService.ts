import { inject, injectable } from 'tsyringe';

import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  title: string;
  classs: boolean;
}

@injectable()
class CreateQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
  ) {}
  public async execute({ title, classs }: IRequest): Promise<QuestionGroup> {
    const newQuestionGroup = await this.questionGroupRepository.create({
      title,
      classs,
    });

    return newQuestionGroup;
  }
}

export default CreateQuestionGroupService;
