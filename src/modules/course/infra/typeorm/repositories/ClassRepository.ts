import { getRepository, Repository } from 'typeorm';

import IClassRepository from '@modules/course/repositories/IClassRepository';

import Classs from '../entities/Class';

class ClassRepository implements IClassRepository {
  private ormRepository: Repository<Classs>;

  constructor() {
    this.ormRepository = getRepository(Classs);
  }
  public async findByID(class_id: number): Promise<Classs | undefined> {
    const findClass = await this.ormRepository.findOne(class_id);

    return findClass;
  }
}
export default ClassRepository;
