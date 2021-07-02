import { getRepository, Repository } from 'typeorm';

import ICreateProfessorDTO from '@modules/user/dtos/ICreateProfessorDTO';
import IProfessorRepository from '@modules/user/repositories/IProfessorRepository';

import Professor from '../entities/Professor';

class ProfesorReprository implements IProfessorRepository {
  private ormRepository: Repository<Professor>;

  constructor() {
    this.ormRepository = getRepository(Professor);
  }
  public async create(user_id: number): Promise<Professor> {
    const newProfesor = this.ormRepository.create({ user_id });
    await this.ormRepository.save(newProfesor);

    return newProfesor;
  }

  public async findByUserID(user_id: number): Promise<Professor | undefined> {
    const findProfessor = await this.ormRepository.findOne({ user_id });

    return findProfessor;
  }
}
export default ProfesorReprository;
