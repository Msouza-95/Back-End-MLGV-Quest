import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Class from './Class';

@Entity('period')
class Period {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  started_at: Date;

  @Column()
  ended_at: Date;

  // Relation

  @OneToMany(() => Class, classs => classs.perido)
  classs: Class[];
}

export default Period;
