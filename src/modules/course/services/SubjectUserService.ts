import { inject, injectable } from 'tsyringe';

import IProfessorRepository from '@modules/user/repositories/IProfessorRepository';
import IUserRepository from '@modules/user/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';

import Classs from '../infra/typeorm/entities/Class';
import IClassRepository from '../repositories/IClassRepository';
import IProfessorClassRepository from '../repositories/IProfessorClassRepository';
import IStudentClassRepository from '../repositories/IStudentClassRepository';
import ISubjectRepository from '../repositories/ISubjectRepository';

interface ISubject {
  subject_id: number;
  class_id: number;
  title: string;
}

@injectable()
class SubjectUserService {
  private class_id: number[] = [];
  private class: Classs[] = [];
  private subject_id: number[] = [];
  private subject: ISubject[] = [];
  constructor(
    @inject('ProfessorClassRepository')
    private professorClassRespository: IProfessorClassRepository,
    @inject('StudentClassRepository')
    private studentClassRepository: IStudentClassRepository,
    @inject('ProfessorRepository')
    private professorRepository: IProfessorRepository,
    @inject('ClassRepository')
    private classRepository: IClassRepository,
    @inject('SubjectReposiroty')
    private subjectRepository: ISubjectRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute(user_id: number): Promise<ISubject[]> {
    const user = await this.userRepository.findById(user_id);

    if (user?.type === 'student') {
      const studanteClass = await this.studentClassRepository.findByUserID(
        user_id,
      );

      if (!studanteClass) {
        throw new AppError('User ID not exists!');
      }

      studanteClass.forEach(studant => {
        this.class_id.push(studant.class_id);
      });
    } else {
      const professor = await this.professorRepository.findByUserID(user_id);
      if (!professor) {
        throw new AppError('User ID not exists!');
      }

      const professorClass = await this.professorClassRespository.findByProfessorID(
        professor.id,
      );

      if (!professorClass) {
        throw new AppError('User ID not exists!');
      }

      professorClass.forEach(professor => {
        this.class_id.push(professor.class_id);
      });
    }

    const promises = this.class_id.map(async id => {
      const findClass = await this.classRepository.findByID(id);
      if (findClass) {
        this.class.push(findClass);
      }
    });

    await Promise.all(promises);

    const promises2 = this.class.map(async classs => {
      const findsubject = await this.subjectRepository.findByID(
        classs.subject_id,
      );
      if (findsubject) {
        const subject = {
          class_id: classs.id,
          title: findsubject.title,
          subject_id: findsubject.id,
        };
        this.subject.push(subject);
      }
    });

    await Promise.all(promises2);

    return this.subject;
  }
}

export default SubjectUserService;
