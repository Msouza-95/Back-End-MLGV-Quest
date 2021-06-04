import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

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
}

export default Professor;
