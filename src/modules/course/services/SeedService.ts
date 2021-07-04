import { inject, injectable } from 'tsyringe';

import Classs from '../infra/typeorm/entities/Class';
import Subject from '../infra/typeorm/entities/Subject';
import IClassRepository from '../repositories/IClassRepository';
import ICourseRepository from '../repositories/ICourseRepository';
import IPeriodRepository from '../repositories/IPeriodRepository';
import ISubjectRepository from '../repositories/ISubjectRepository';

interface IResponse {
  name: string;
  subject: [
    {
      code: string;
      title: string;
    },
  ];
  class: {
    period: {
      name: string;
      started_at: Date;
      ended_at: Date;
    };
  };
}

@injectable()
class SeedService {
  constructor(
    @inject('SubjectReposiroty')
    private subjectRepository: ISubjectRepository,
    @inject('ClassRepository')
    private classRepository: IClassRepository,
    @inject('PeriodRepository')
    private periodRepository: IPeriodRepository,
    @inject('CourseRepository')
    private courseRepository: ICourseRepository,
  ) {}

  public async execute(courses: IResponse[]): Promise<IResponse[]> {
    const promises = courses.map(async course => {
      // criar courso
      const newcourse = await this.courseRepository.create(course.name);

      // criar subject
      const promises2 = course.subject.map(async subjectt => {
        const newsubject = await this.subjectRepository.create({
          title: subjectt.title,
          course_id: newcourse.id,
        });

        const findPeriod = await this.periodRepository.findName(
          course.class.period.name,
        );
        let period_id;
        if (!findPeriod) {
          const newPeriod = await this.periodRepository.create({
            ended_at: course.class.period.ended_at,
            started_at: course.class.period.started_at,
            name: course.class.period.name,
          });

          period_id = newPeriod.id;
        } else {
          period_id = findPeriod.id;
        }

        const newClass = await this.classRepository.create({
          subject_id: newsubject.id,
          period_id,
        });
      });
      await Promise.all(promises2);
    });

    await Promise.all(promises);

    return courses;
  }
}

export default SeedService;
