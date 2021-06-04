import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import UserAgreement from '@modules/answer/infra/typeorm/entities/UserAgreement';

import Period from './Period';

export enum statusEnum {
  active = 'active',
  inactive = 'inactive',
}

@Entity('exam')
class Exam {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;

  @Column()
  title: string;

  @Column()
  started_at: Date;

  @Column()
  ended_at: Date;

  @Column()
  allow_anonymous: number;

  @Column({ type: 'enum', enum: statusEnum, default: statusEnum.active })
  status: statusEnum;

  @Column()
  url: string;

  @Column()
  period_id: number;

  // realtions
  @OneToOne(() => Period)
  @JoinColumn({ name: 'period_id' })
  period: Period;

  @OneToMany(() => UserAgreement, userAgreement => userAgreement.exam)
  userAgreements: UserAgreement[];
}

export default Exam;
