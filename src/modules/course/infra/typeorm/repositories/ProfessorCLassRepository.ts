import { getRepository, Repository } from 'typeorm';

import IProfessorClassRepository from '@modules/course/repositories/IProfessorClassRepository';

import ProfessorClass from '../entities/ProfessorClass';

class ProfessorClassRepository implements IProfessorClassRepository {
  private ormRespository: Repository<ProfessorClass>;
  constructor() {
    this.ormRespository = getRepository(ProfessorClass);
  }
  public async findByProfessorID(
    professor_id: number,
  ): Promise<ProfessorClass[] | undefined> {
    const findProfessor = await this.ormRespository.find({ professor_id });

    return findProfessor;
  }
}

export default ProfessorClassRepository;
