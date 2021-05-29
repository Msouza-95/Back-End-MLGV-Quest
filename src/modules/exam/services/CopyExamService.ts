import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Exam from '../infra/typeorm/entities/Exam';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IExamRepository from '../repositories/IExamRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  id: number;
  title: string;
  description: string;
  started_at: Date;
  ended_at: Date;
  allow_anonymous: number;
}

@injectable()
class CopyExamService {
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
    id,
    title,
    description,
    started_at,
    ended_at,
    allow_anonymous,
  }: IRequest): Promise<Exam> {
    const oldExam = await this.examRepository.findById(id);

    if (!oldExam) {
      throw new AppError('Exam id invalid');
    }

    const dataExam = await this.examQuestionGroupRepository.findByExamId(
      oldExam.id,
    );

    const findtitle = await this.examRepository.findByTitle(title);
    if (findtitle) {
      throw new AppError('title exam exists');
    }

    // cria um exam novo
    const newExam = await this.examRepository.create({
      title,
      description,
      started_at,
      ended_at,
      allow_anonymous,
    });
    if (dataExam) {
      const { length } = dataExam;

      for (let i = 0; i < length; i++) {
        // eslint-disable-next-line no-await-in-loop
        const groupCopy = await this.questionGroupRepository.findById(
          dataExam[i].question_group_id,
        );
        if (groupCopy) {
          // eslint-disable-next-line no-await-in-loop
          const questionGroup = await this.questionGroupRepository.create({
            title: groupCopy?.title,
            classs: groupCopy?.classs,
          });

          // duplica os dados examQuestionGroup com id novo
          // eslint-disable-next-line no-await-in-loop
          const examQuestionGroup = await this.examQuestionGroupRepository.create(
            {
              exam_id: newExam.id,
              question_group_id: questionGroup.id,
            },
          );

          // duplica os dados QuestionGroup com id novo
          // eslint-disable-next-line no-await-in-loop
          const dataQuestion = await this.questionRepository.findByExamGroupID(
            dataExam[i].id,
          );

          const lengthQuestion = dataQuestion.length;
          for (let j = 0; j < lengthQuestion; j++) {
            // eslint-disable-next-line no-await-in-loop
            await this.questionRepository.create({
              statement: dataQuestion[j].statement,
              image_alt: dataQuestion[j].image_alt,
              image_url: dataQuestion[j].image_url,
              required: dataQuestion[j].required,
              exam_question_group_id: examQuestionGroup.id,
            });
          }
        }
      }
    }
    return newExam;
  }
}

export default CopyExamService;
