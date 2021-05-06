import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import User from './User';

@Entity('auth')
class Auth {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  password: string;

  @Column()
  user_id: number;

  // relation

  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}

export default Auth;
