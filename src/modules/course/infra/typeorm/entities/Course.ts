import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

import Subject from './Subject';

@Entity('course')
class Course {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  code: string;

  @Column()
  title: string;

  constructor() {
    if (!this.code) {
      this.code = uuid();
    }
  }

  // Relation

  @OneToMany(() => Subject, subject => subject.course_id)
  subjetcs: Subject[];
}

export default Course;
