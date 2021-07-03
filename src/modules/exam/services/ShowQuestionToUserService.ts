/* eslint-disable no-await-in-loop */
/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */
import { container, inject, injectable } from 'tsyringe';

import SubjectUserService from '@modules/course/services/SubjectUserService';
import AppError from '@shared/errors/AppError';

import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  exam_id: number;
  user_id: number;
}

interface ISubject {
  class_id: number;
  title: string;
  subject_id: number;
}
interface IQuestion {
  id: number;
  statement: string;
  image_url: string;
  image_alt: string;
  required: boolean;
  exam_question_group_id: number;
}

interface IResponse {
  ids?: number;
  id: number;
  title: string;
  classs: boolean;
  subject?: ISubject[];
  questions: IQuestion[];
}

interface IResponse {
  ids?: number;
  id: number;
  title: string;
  classs: boolean;
  subject?: ISubject[];
  questions: IQuestion[];
}

@injectable()
class ShowQuestionToUserService {
  private group: IResponse[] = [];
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroup: IQuestionGroupRepository,
    @inject('QuestionRepository')
    private questionRepository: IQuestionRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository, // private questions: Question[],
  ) {}

  public async execute({ exam_id, user_id }: IRequest): Promise<IResponse[]> {
    const examQuestionGroups = await this.examQuestionGroupRepository.findByExamId(
      exam_id,
    );

    console.log(exam_id);

    if (!examQuestionGroups) {
      throw new AppError('exam_id not exists');
    }

    const subjectUserService = container.resolve(SubjectUserService);
    const subject = await subjectUserService.execute(user_id);

    const lengthSubject = subject.length;

    // gearar estrutura de retorno
    const promises = examQuestionGroups.map(async Element => {
      const questions = await this.questionRepository.findByExamGroupID(
        Element.id,
      );

      const promises2 = questions.map(async question => {
        const group = await this.questionGroup.findById(
          question.examQuestionGroup.question_group_id,
        );

        if (group) {
          // const gropus = { id: group.id, title: group.title };

          if (this.group.find(q => q.id === group.id)) {
            const index = this.group.findIndex(q => q.id === group.id);
            const { length } = this.group[index].questions;

            const b = {
              id: question.id,
              statement: question.statement,
              image_url: question.image_url,
              image_alt: question.image_alt,
              required: question.required,
              exam_question_group_id: question.exam_question_group_id,
            };
            this.group[index].questions.push(b);
          } else {
            // criar grupo e question

            // se é atrelado ao grupo
            // eslint-disable-next-line no-lonely-if
            if (group.classs) {
              const a = {
                ids: this.group.length + 1,
                id: group.id,
                title: group.title,
                classs: group.classs,
                subject,
                questions: [
                  {
                    id: question.id,
                    statement: question.statement,
                    image_url: question.image_url,
                    image_alt: question.image_alt,
                    required: question.required,
                    exam_question_group_id: question.exam_question_group_id,
                  },
                ],
              };
              this.group.push(a);
            } else {
              const a = {
                ids: this.group.length + 1,
                id: group.id,
                title: group.title,
                classs: group.classs,
                subject: [],
                questions: [
                  {
                    id: question.id,
                    statement: question.statement,
                    image_url: question.image_url,
                    image_alt: question.image_alt,
                    required: question.required,
                    exam_question_group_id: question.exam_question_group_id,
                  },
                ],
              };
              this.group.push(a);
            }
          }
        }
      });

      await Promise.all(promises2);
    });
    await Promise.all(promises);

    return this.group;
  }
}

export default ShowQuestionToUserService;
