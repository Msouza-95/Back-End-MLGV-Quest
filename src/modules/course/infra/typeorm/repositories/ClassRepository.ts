import { getRepository, Repository } from 'typeorm';

import ICreateClass from '@modules/course/dtos/ICreateClass';
import IClassRepository from '@modules/course/repositories/IClassRepository';

import Classs from '../entities/Class';

class ClassRepository implements IClassRepository {
  private ormRepository: Repository<Classs>;

  constructor() {
    this.ormRepository = getRepository(Classs);
  }
  public async create(data: ICreateClass): Promise<Classs> {
    const newClass = this.ormRepository.create(data);
    await this.ormRepository.save(newClass);

    return newClass;
  }

  public async findByID(class_id: number): Promise<Classs | undefined> {
    const findClass = await this.ormRepository.findOne(class_id);

    return findClass;
  }
  public async find(): Promise<Classs[]> {
    const findClass = await this.ormRepository.find({
      relations: ['subject'],
    });

    return findClass;
  }
}
export default ClassRepository;
