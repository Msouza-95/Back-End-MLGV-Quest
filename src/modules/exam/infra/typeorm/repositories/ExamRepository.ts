import ICreateExam from '@modules/exam/dtos/ICreateExam';
import IExamRepository from '@modules/exam/repositories/IExamRepository';
import { getRepository, Repository } from 'typeorm';

import Exam from '../entities/Exam';

class ExamRepository implements IExamRepository {
  private ormRepository: Repository<Exam>;

  constructor() {
    this.ormRepository = getRepository(Exam);
  }

  public async create(data: ICreateExam): Promise<Exam> {
    const createExam = this.ormRepository.create(data);

    await this.ormRepository.save(createExam);

    return createExam;
  }

  findById(id: number): Promise<Exam | undefined> {
    const findExam = this.ormRepository.findOne({ where: { id } });
    return findExam;
  }
}

export default ExamRepository;
