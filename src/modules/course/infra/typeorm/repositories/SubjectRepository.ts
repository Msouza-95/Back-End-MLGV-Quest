import { getRepository, Repository } from 'typeorm';

import ICreateSubject from '@modules/course/dtos/ICreateSubject';
import ISubjectRepository from '@modules/course/repositories/ISubjectRepository';

import Subject from '../entities/Subject';

class SubjectRepository implements ISubjectRepository {
  private ormRepository: Repository<Subject>;
  constructor() {
    this.ormRepository = getRepository(Subject);
  }
  public async create(data: ICreateSubject): Promise<Subject> {
    const newSubject = this.ormRepository.create(data);
    await this.ormRepository.save(newSubject);

    return newSubject;
  }

  public async findByID(subject_id: number): Promise<Subject | undefined> {
    const findSubject = await this.ormRepository.findOne({ id: subject_id });

    return findSubject;
  }
}

export default SubjectRepository;
