import { DeleteResult } from 'typeorm';

import ICreateExam from '../dtos/ICreateExam';
import Exam from '../infra/typeorm/entities/Exam';

export default interface IExamRepository {
  create(data: ICreateExam): Promise<Exam>;
  findById(id: number): Promise<Exam | undefined>;
  findByTitle(title: string): Promise<Exam | undefined>;
  index(): Promise<Exam[]>;
  delete(id: number): Promise<DeleteResult>;
}
