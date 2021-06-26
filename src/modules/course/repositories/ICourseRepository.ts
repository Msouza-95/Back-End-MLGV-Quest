import Course from '../infra/typeorm/entities/Course';

interface ICourseRepository {
  create(title: string): Promise<Course>;
}

export default ICourseRepository;
