import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Class from './Class';
import Course from './Course';

@Entity('subject')
class Subject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  title: string;

  @Column()
  course_id: number;

  constructor() {
    if (!this.code) {
      this.code = uuid();
    }
  }

  // Relation

  @ManyToOne(() => Course, course => course.subjetcs)
  @JoinColumn({ name: 'course_id' })
  course: Course;

  @OneToMany(() => Class, classs => classs.subject_id)
  classs: Class[];
}

export default Subject;
