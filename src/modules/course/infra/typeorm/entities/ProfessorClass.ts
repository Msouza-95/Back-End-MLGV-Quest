import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Professor from '@modules/user/infra/typeorm/entities/Professor';

import Class from './Class';

@Entity('professorClass')
class ProfessorClass {
  @PrimaryGeneratedColumn('increment')
  id: string;

  @Column()
  professor_id: number;

  @Column()
  class_id: number;

  // relation

  @ManyToOne(() => Class, classs => classs.professorClass)
  @JoinColumn({ name: 'class_id' })
  classs: Class;

  @ManyToOne(() => Professor, professor => professor.professorClass)
  @JoinColumn({ name: 'professor_id' })
  professor: Professor;
}

export default ProfessorClass;
