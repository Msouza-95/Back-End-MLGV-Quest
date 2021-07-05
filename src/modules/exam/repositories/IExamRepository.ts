import { DeleteResult, UpdateResult } from 'typeorm';

import ICreateExam from '../dtos/ICreateExam';
import IUpdateExam from '../dtos/IUpdateExam';
import Exam from '../infra/typeorm/entities/Exam';

export default interface IExamRepository {
  create(data: ICreateExam): Promise<Exam>;
  findById(id: number): Promise<Exam | undefined>;
  findByTitle(title: string): Promise<Exam | undefined>;
  index(): Promise<Exam[]>;
  delete(id: number): Promise<DeleteResult>;
  update(id: number, data: IUpdateExam): Promise<UpdateResult>;
  queryCSV(exam_id: number): Promise<any>;
}
