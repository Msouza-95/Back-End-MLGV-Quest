import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import ProfessorClass from '@modules/course/infra/typeorm/entities/ProfessorClass';

import User from './User';

@Entity('professor')
class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  user_id: number;

  @ManyToOne(() => User, user => user.professors)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @OneToMany(() => ProfessorClass, professorClass => professorClass.professor)
  professorClass: ProfessorClass;
}

export default Professor;
