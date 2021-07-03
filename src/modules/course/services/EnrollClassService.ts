import { inject, injectable } from 'tsyringe';

import StudentClass from '@modules/user/infra/typeorm/entities/StudentClass';
import IProfessorRepository from '@modules/user/repositories/IProfessorRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';

import ProfessorClass from '../infra/typeorm/entities/ProfessorClass';
import IClassRepository from '../repositories/IClassRepository';
import IProfessorClassRepository from '../repositories/IProfessorClassRepository';
import IStudentClassRepository from '../repositories/IStudentClassRepository';

interface IResponse {
  id: number;
  class_id: number;
  tipo: string;
}
@injectable()
class EnrollClassService {
  constructor(
    @inject('ProfessorClassRepository')
    private professorClassRepository: IProfessorClassRepository,
    @inject('StudentClassRepository')
    private studentClassRepository: IStudentClassRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
    @inject('ProfessorRepository')
    private professorRepository: IProfessorRepository,
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  public async execute({
    id,
    class_id,
    tipo,
  }: IResponse): Promise<ProfessorClass | StudentClass> {
    const classs = await this.classRepository.findByID(class_id);

    if (!classs) {
      throw new AppError('Class_id not exists');
    }
    if (tipo === 'Professor') {
      const professor = await this.professorRepository.findByID(id);
      if (!professor) {
        throw new AppError('Professor_id not exists');
      }
      const professorClass = await this.professorClassRepository.create({
        professor_id: id,
        class_id,
      });
      return professorClass;
    }

    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('user_id not exists');
    }
    const studentClass = await this.studentClassRepository.create({
      user_id: id,
      class_id,
    });
    return studentClass;
  }
}

export default EnrollClassService;
