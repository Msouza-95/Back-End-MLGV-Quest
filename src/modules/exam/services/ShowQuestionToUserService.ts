import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import Question from '../infra/typeorm/entities/Question';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  exam_id: number;
  user_id: number;
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
  id: number;
  title: string;
  questions: IQuestion[];
  //   {
  //     id: number;
  //     statement: string;
  //     image_url: string;
  //     image_alt: string;
  //     required: boolean;
  //     exam_question_group_id: number;
  //   },
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

  public async execute(exam_id: number): Promise<IResponse[]> {
    const examQuestionGroups = await this.examQuestionGroupRepository.findByExamId(
      exam_id,
    );

    if (!examQuestionGroups) {
      throw new AppError('exam_id not exists');
    }

    const promises = examQuestionGroups.map(async Element => {
      const questions = await this.questionRepository.findByExamGroupID(
        Element.id,
      );

      const promises2 = questions.map(async question => {
        const group = await this.questionGroup.findById(
          question.examQuestionGroup.question_group_id,
        );

        if (group) {
          const gropus = { id: group.id, title: group.title };

          // const a = {
          //  id: group.id,
          // title: group.title,
          // questions: [],  {
          //   id: question.id,
          //   statement: question.statement,
          //   image_url: question.image_url,
          //   image_alt: question.image_alt,
          //   required: question.required,
          //   exam_question_group_id: question.exam_question_group_id,
          // },
          // };

          if (this.group.find(q => q.id === group.id)) {
            // console.log(`${Element.question_group_id}:${group?.id}`);
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
            const a = {
              id: group.id,
              title: group.title,
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

          // console.log(a);
        }
      });

      await Promise.all(promises2);
    });
    await Promise.all(promises);
    // console.log(this.questions);

    return this.group;
  }
}

export default ShowQuestionToUserService;
