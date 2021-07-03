import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  title: string;
  classs: boolean;
  exam_id: number;
}

@injectable()
class CreateQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
  ) {}
  public async execute({
    title,
    classs,
    exam_id,
  }: IRequest): Promise<QuestionGroup> {
    const findGroup = await this.questionGroupRepository.findTitle(title);

    // if (findGroup) {
    //   throw new AppError('QuestionGroup aready exists');
    // }

    const newQuestionGroup = await this.questionGroupRepository.create({
      title,
      classs,
    });

    if (newQuestionGroup) {
      const newExamQuestionGroup = await this.examQuestionGroupRepository.create(
        {
          question_group_id: newQuestionGroup.id,
          exam_id,
        },
      );
    }

    return newQuestionGroup;
  }
}

export default CreateQuestionGroupService;
