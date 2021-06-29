import { getRepository, Repository } from 'typeorm';

import ICreateProfessorDTO from '@modules/user/dtos/ICreateProfessorDTO';
import IProfessorRepository from '@modules/user/repositories/IProfessorRepository';

import Professor from '../entities/Professor';

class ProfesorReprository implements IProfessorRepository {
  private ormRepository: Repository<Professor>;

  constructor() {
    this.ormRepository = getRepository(Professor);
  }

  public async cratete(data: ICreateProfessorDTO): Promise<Professor> {
    const newProfessor = this.ormRepository.create(data);
    await this.ormRepository.save(newProfessor);

    return newProfessor;
  }
}
export default ProfesorReprository;
