import { getRepository, Repository } from 'typeorm';

import ICourseRepository from '@modules/course/repositories/ICourseRepository';

import Course from '../entities/Course';

class CourseRepository implements ICourseRepository {
  private ormRespository: Repository<Course>;
  constructor() {
    this.ormRespository = getRepository(Course);
  }
  public async create(title: string): Promise<Course> {
    const createCourse = this.ormRespository.create({ title });
    await this.ormRespository.save(createCourse);

    return createCourse;
  }
}

export default CourseRepository;
