import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from '@modules/user/infra/typeorm/entities/User';

import Class from './Class';

@Entity('student_class')
class StudentClass {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  user_id: number;

  @Column()
  class_id: number;

  // Relation

  @ManyToOne(() => User, user => user.studentClass)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Class, classs => classs.studentClass)
  @JoinColumn({ name: 'class_id' })
  class: Class;
}

export default StudentClass;
