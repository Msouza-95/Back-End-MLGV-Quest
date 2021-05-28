import { inject, injectable } from 'tsyringe';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

@injectable()
class ShowQuestionGroupService {
  constructor(
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
  ) {}
  public async execute(
    exam_id: number,
  ): Promise<ExamQuestionGroup[] | undefined> {
    const examQuestionGroup = await this.examQuestionGroupRepository.findByExamId(
      exam_id,
    );

    return examQuestionGroup;
  }
}

export default ShowQuestionGroupService;
