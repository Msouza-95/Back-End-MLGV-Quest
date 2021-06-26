import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import Question from '../infra/typeorm/entities/Question';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  exam_id: number;
  user_id: number;
}

interface IResponse {
  id: number;
  statement: string;
  image_url: string;
  image_alt: string;
  required: boolean;
  questionGroup: string;
}

@injectable()
class ShowQuestionToUserService {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository, // private questions: Question[],
  ) {}

  public async execute({
    exam_id,
    user_id,
  }: IRequest): Promise<Question[] | undefined> {
    const examQuestionGroups = await this.examQuestionGroupRepository.findByExamId(
      exam_id,
    );

    const questions: Question[] = [];
    examQuestionGroups?.forEach(async Element => {
      const question = new Question();
      Object.assign(
        question,
        await this.questionRepository.findByExamGroupID(Element.id),
      );
      questions.push(question);
      console.log(questions);
    });

    return questions;
  }
}

export default ShowQuestionToUserService;
