import { inject, injectable } from 'tsyringe';

import Question from '../infra/typeorm/entities/Question';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  statement: string;
  image_url: string;
  image_alt: string;
  required: boolean;
  exam_question_group_id: number;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
  ) {}

  public async execute({
    statement,
    image_url,
    image_alt,
    required,
    exam_question_group_id,
  }: IRequest): Promise<Question> {
    const newQuestion = await this.questionRepository.create({
      statement,
      image_url,
      image_alt,
      required,
      exam_question_group_id,
    });

    return newQuestion;
  }
}

export default CreateQuestionService;
