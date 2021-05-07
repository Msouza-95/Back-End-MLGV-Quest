import ICreateExam from '@modules/exam/dtos/ICreateExam';
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
}

export default FakeExamRepository;
