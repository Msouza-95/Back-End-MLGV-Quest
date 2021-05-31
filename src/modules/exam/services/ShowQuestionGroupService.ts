import { inject, injectable } from 'tsyringe';

import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

@injectable()
class ShowQuestionGroupService {
  constructor(
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
  ) {}
  public async execute(exam_id: number): Promise<QuestionGroup[] | undefined> {
    const examQuestionGroup = await this.examQuestionGroupRepository.findByExamId(
      exam_id,
    );

    const questionGroup: QuestionGroup[] = [];
    if (examQuestionGroup) {
      const { length } = examQuestionGroup;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        // eslint-disable-next-line no-await-in-loop
        const Group = new QuestionGroup();

        Object.assign(
          Group,
          // eslint-disable-next-line no-await-in-loop
          await this.questionGroupRepository.findById(
            examQuestionGroup[i].question_group_id,
          ),
        );

        questionGroup.push(Group);
      }
    }

    return questionGroup;
  }
}

export default ShowQuestionGroupService;
