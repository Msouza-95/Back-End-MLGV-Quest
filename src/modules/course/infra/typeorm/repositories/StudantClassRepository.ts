import { getRepository, Repository } from 'typeorm';

import ICreateStudentClass from '@modules/course/dtos/ICreateStudentCLass';
import IStudentClassRepository from '@modules/course/repositories/IStudentClassRepository';
import StudentClass from '@modules/user/infra/typeorm/entities/StudentClass';

class StudentClassRepository implements IStudentClassRepository {
  private ormRespository: Repository<StudentClass>;
  constructor() {
    this.ormRespository = getRepository(StudentClass);
  }
  public async create(data: ICreateStudentClass): Promise<StudentClass> {
    const studente = this.ormRespository.create(data);
    await this.ormRespository.save(studente);
    return studente;
  }
  public async findByUserID(
    user_id: number,
  ): Promise<StudentClass[] | undefined> {
    const findStudant = await this.ormRespository.find({ user_id });

    return findStudant;
  }
}

export default StudentClassRepository;
