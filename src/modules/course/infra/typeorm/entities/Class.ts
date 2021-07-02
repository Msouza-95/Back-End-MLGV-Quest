import {
  Column,
  Entity,
  IsNull,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import StudentClass from '@modules/user/infra/typeorm/entities/StudentClass';

import Period from './Period';
import ProfessorClass from './ProfessorClass';
import Subject from './Subject';

@Entity('class')
class Classs {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  subject_id: number;

  @Column()
  period_id: number;

  // relation

  @ManyToOne(() => Period, period => period.classs)
  @JoinColumn({ name: 'period_id' })
  perido: Period;

  @ManyToOne(() => Subject, subject => subject.classs)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @OneToMany(() => ProfessorClass, professorclass => professorclass.class_id)
  professorClass: ProfessorClass[];

  @OneToMany(() => StudentClass, studentclass => studentclass.class_id)
  studentClass: StudentClass[];
}
export default Classs;
