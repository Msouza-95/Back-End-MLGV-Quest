import StudentClass from '@modules/user/infra/typeorm/entities/StudentClass';

import ICreateStudentClass from '../dtos/ICreateStudentCLass';

interface IStudentClassRepository {
  create(data: ICreateStudentClass): Promise<StudentClass>;
  findByUserID(user_id: number): Promise<StudentClass[] | undefined>;
}

export default IStudentClassRepository;
