import { DeleteResult, UpdateResult } from 'typeorm';

import ICreateQuestionGroup from '../dtos/ICreateQuestionGroup';
import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';

export default interface IQuestionGroupRepository {
  create(data: ICreateQuestionGroup): Promise<QuestionGroup>;
  findById(id: number): Promise<QuestionGroup | undefined>;
  findTitle(title: string): Promise<QuestionGroup | undefined>;
  index(): Promise<QuestionGroup[]>;
  upadate(id: number, data: ICreateQuestionGroup): Promise<UpdateResult>;
  delete(id: number): Promise<DeleteResult>;
  questions(id: number): Promise<QuestionGroup | undefined>;
}
