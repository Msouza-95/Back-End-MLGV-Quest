import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Question from '../infra/typeorm/entities/Question';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IExamRepository from '../repositories/IExamRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  statement: string;
  image_url: string;
  image_alt: string;
  required: boolean;
  question_group_id: number;
  exam_id: number;
}

@injectable()
class CreateQuestionService {
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
  ) {}

  public async execute({
    statement,
    image_url,
    image_alt,
    required,
    question_group_id,
    exam_id,
  }: IRequest): Promise<Question> {
    const questionGroup = await this.questionGroupRepository.findById(
      question_group_id,
    );

    if (!questionGroup) {
      throw new AppError(' QuestionGrou id invalid');
    }

    const exam = await this.examRepository.findById(exam_id);

    if (!exam) {
      throw new AppError(' Exam id invalid');
    }

    const id = await this.examQuestionGroupRepository.allEquivalente({
      question_group_id,
      exam_id,
    });

    if (id?.length === 0) {
      const examQuestionGroup = await this.examQuestionGroupRepository.create({
        question_group_id,
        exam_id,
      });

      const newQuestion = await this.questionRepository.create({
        statement,
        image_url,
        image_alt,
        required,
        exam_question_group_id: examQuestionGroup.id,
      });

      return newQuestion;
    }

    const newQuestion = await this.questionRepository.create({
      statement,
      image_url,
      image_alt,
      required,
      exam_question_group_id: id[0].id,
    });

    return newQuestion;
  }
}

export default CreateQuestionService;
