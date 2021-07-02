import { getRepository, Repository } from 'typeorm';

import ISubjectRepository from '@modules/course/repositories/ISubjectRepository';

import Subject from '../entities/Subject';

class SubjectRepository implements ISubjectRepository {
  private ormRepository: Repository<Subject>;
  constructor() {
    this.ormRepository = getRepository(Subject);
  }

  public async findByID(subject_id: number): Promise<Subject | undefined> {
    const findSubject = await this.ormRepository.findOne({ id: subject_id });

    return findSubject;
  }
}

export default SubjectRepository;
