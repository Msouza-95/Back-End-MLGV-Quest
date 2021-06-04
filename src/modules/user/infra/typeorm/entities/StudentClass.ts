import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

@Entity('studentClass')
class StudentClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @Column()
  class_id: number;

  @ManyToOne(() => User, user => user.studentClass)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default StudentClass;
