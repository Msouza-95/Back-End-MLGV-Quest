import { DeleteResult, UpdateResult } from 'typeorm';

import ICreateExam from '@modules/exam/dtos/ICreateExam';
import IUpdateExam from '@modules/exam/dtos/IUpdateExam';
import Exam from '@modules/exam/infra/typeorm/entities/Exam';

import IExamRepository from '../IExamRepository';

class FakeExamRepository implements IExamRepository {
  private exams: Exam[] = [];

  public async create(data: ICreateExam): Promise<Exam> {
    const nextId = this.exams.length + 1;
    const newExam = new Exam();

    Object.assign(newExam, { id: nextId }, data);

    this.exams.push(newExam);

    return newExam;
  }
  public async findById(id: number): Promise<Exam | undefined> {
    const findExam = this.exams.find(exam => exam.id === id);

    return findExam;
  }

  public async findByTitle(title: string): Promise<Exam | undefined> {
    const findExam = this.exams.find(exam => exam.title === title);

    return findExam;
  }
  public async index(): Promise<Exam[]> {
    return this.exams;
  }
  public async delete(id: number): Promise<DeleteResult> {
    const index = this.exams.findIndex(exam => exam.id === id);

    this.exams.splice(index, 1);
    const deletes = new DeleteResult();

    return deletes;
  }

  public async update(id: number, data: IUpdateExam): Promise<UpdateResult> {
    throw new Error('Method not implemented de update exam');
  }
}

export default FakeExamRepository;
