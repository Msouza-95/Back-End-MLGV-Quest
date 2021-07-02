import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import UserAnswer from './UserAnswer';

@Entity('userAnswerClass')
class UserAnswerClass {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  class_id: number;

  @Column()
  user_answer_id: number;

  @Column()
  score: number;

  // relations

  @ManyToOne(() => UserAnswer, userAnswer => userAnswer.userAnswerClass)
  @JoinColumn({ name: 'user_answer_id' })
  userAnswer: UserAnswer;
}

export default UserAnswerClass;
