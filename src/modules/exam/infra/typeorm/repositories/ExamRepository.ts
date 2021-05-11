import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

import ICreateExam from '@modules/exam/dtos/ICreateExam';
import IUpdateExam from '@modules/exam/dtos/IUpdateExam';
import IExamRepository from '@modules/exam/repositories/IExamRepository';

import Exam from '../entities/Exam';

class ExamRepository implements IExamRepository {
  private ormRepository: Repository<Exam>;

  constructor() {
    this.ormRepository = getRepository(Exam);
  }

  public async index(): Promise<Exam[]> {
    const exams = await this.ormRepository.find();

    return exams;
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

  findByTitle(title: string): Promise<Exam | undefined> {
    const findExam = this.ormRepository.findOne({ where: { title } });
    return findExam;
  }

  public async delete(id: number): Promise<DeleteResult> {
    const deleteResult = await this.ormRepository.delete(id);
    return deleteResult;
  }

  public async update(id: number, data: IUpdateExam): Promise<UpdateResult> {
    const examUpdate = await this.ormRepository.update(id, data);

    return examUpdate;
  }
}

export default ExamRepository;
