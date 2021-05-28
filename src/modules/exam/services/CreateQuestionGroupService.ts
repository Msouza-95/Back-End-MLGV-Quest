import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  title: string;
  classs: number;
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
  }: IRequest): Promise<ExamQuestionGroup> {
    const findGroup = await this.questionGroupRepository.findTitle(title);

    if (findGroup) {
      throw new AppError('QuestionGroup aready exists');
    }

    const newQuestionGroup = await this.questionGroupRepository.create({
      title,
      classs,
    });

    const newExamQuestionGroup = await this.examQuestionGroupRepository.create({
      question_group_id: newQuestionGroup.id,
      exam_id,
    });

    return newExamQuestionGroup;
  }
}

export default CreateQuestionGroupService;
