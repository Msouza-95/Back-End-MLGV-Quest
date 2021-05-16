import { UpdateResult } from 'typeorm';

import ICreateExamQuestionGroup from '../dtos/ICreateExamQuestionGroup';
import IIndexQuestion from '../dtos/IIndexQuestion';
import IUpdateQuestionGroup from '../dtos/IUpdateQuestionGroup';
import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';

export default interface IExamQuestionGroupRepository {
  save(exam: ExamQuestionGroup): Promise<ExamQuestionGroup>;
  create(data: ICreateExamQuestionGroup): Promise<ExamQuestionGroup>;
  findById(id: number): Promise<ExamQuestionGroup | undefined>;
  findByQuestionGroupID(
    question_group_id: number,
  ): Promise<ExamQuestionGroup | undefined>;
  findByExamId(exam_id: number): Promise<ExamQuestionGroup[] | undefined>;
  allEquivalente(
    data: IIndexQuestion,
  ): Promise<ExamQuestionGroup[] | undefined>;
  update(id: number, data: IUpdateQuestionGroup): Promise<UpdateResult>;
}
