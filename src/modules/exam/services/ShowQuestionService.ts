import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/entities/Question';
import IQuestionRepository from '../repositories/IQuestionRepository';

@injectable()
class ShowQuestionService {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  public async execute(exam_question_group_id: number): Promise<Question[]> {
    const questions = await this.questionRepository.findByExamGroupID(
      exam_question_group_id,
    );

    return questions;
  }
}

export default ShowQuestionService;
