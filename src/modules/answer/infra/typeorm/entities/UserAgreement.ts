import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from 'typeorm';
import { v4 as uuid } from 'uuid';

import Exam from '@modules/exam/infra/typeorm/entities/Exam';
import User from '@modules/user/infra/typeorm/entities/User';

import UserAnswer from './UserAnswer';

@Entity('userAgreement')
class UserAgreement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  uuid: string;

  @Column()
  created_at: Date;

  @Column()
  anoymous: boolean;

  @Column()
  exam_id: number;

  @Column()
  user_id: number;

  // relations
  @OneToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Exam, exam => exam.userAgreements)
  @JoinColumn({ name: 'exam_id' })
  exam: Exam;

  @OneToMany(() => UserAnswer, userAnswer => userAnswer.userAgreement)
  userAnswers: UserAnswer[];

  constructor() {
    this.created_at = new Date();

    if (!this.id) {
      this.uuid = uuid();
    }
  }
}

export default UserAgreement;
