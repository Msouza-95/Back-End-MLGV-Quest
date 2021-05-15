import { inject, injectable } from 'tsyringe';
import { UpdateResult } from 'typeorm';

import AppError from '@shared/errors/AppError';

import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IExamRepository from '../repositories/IExamRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

interface IRequest {
  exam_id: number;
  question_group_id: number;
  position: number;
}

interface IResponse {
  message: string;
}

@injectable()
class PositionQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute({
    exam_id,
    question_group_id,
    position,
  }: IRequest): Promise<IResponse> {
    const exam = await this.examRepository.findById(exam_id);

    if (!exam) {
      throw new AppError('Exam id not Exists');
    }

    const questionGroup = await this.questionGroupRepository.findById(
      question_group_id,
    );
    if (!questionGroup) {
      throw new AppError('QuestionGroup id not Exists');
    }

    const ids = await this.examQuestionGroupRepository.allEquivalente({
      exam_id,
      question_group_id,
    });

    ids?.forEach(async element => {
      const examQuestionGroup = await this.examQuestionGroupRepository.findById(
        element.id,
      );

      const examQuestionGroupUpdated = await this.examQuestionGroupRepository.update(
        element.id,
        {
          exam_id,
          question_group_id,
          position,
        },
      );
    });

    return { message: 'success' };
  }
}

export default PositionQuestionGroupService;
