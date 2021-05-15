import { inject, injectable } from 'tsyringe';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import Question from '../infra/typeorm/entities/Question';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  exam_id: number;
  question_group_id: number;
}

@injectable()
class ShowQuestionService {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository, // private questions: Question[],
  ) {}

  public async execute({
    exam_id,
    question_group_id,
  }: IRequest): Promise<Question[]> {
    const ids = await this.examQuestionGroupRepository.allEquivalente({
      exam_id,
      question_group_id,
    });

    const questions: Question[] = [];

    if (ids) {
      const { length } = ids;

      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        const question = new Question();

        // eslint-disable-next-line no-await-in-loop
        Object.assign(
          question,
          // eslint-disable-next-line no-await-in-loop
          await this.questionRepository.findByExamGroupID(ids[i].id),
        );

        questions.push(question);
      }
    }

    return questions;
  }
}

export default ShowQuestionService;
