import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import UserAgreement from './UserAgreement';
import UserAnswerClass from './UserAnswerClass';

@Entity('userAnswer')
class UserAnswer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  question_id: number;

  @Column()
  user_agreement_id: number;

  @Column()
  score: number;

  // relations

  @ManyToOne(() => UserAgreement, userAgreement => userAgreement.userAnswers)
  @JoinColumn({ name: 'user_agreement_id' })
  userAgreement: UserAgreement;

  @OneToMany(
    () => UserAnswerClass,
    userAnswerClass => userAnswerClass.userAnswer,
  )
  userAnswerClass: UserAnswerClass[];
}

export default UserAnswer;
