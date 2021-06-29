import StudentClass from '@modules/user/infra/typeorm/entities/StudentClass';

interface IStudentClassRepository {
  findByUserID(user_id: number): Promise<StudentClass[] | undefined>;
}

export default IStudentClassRepository;
