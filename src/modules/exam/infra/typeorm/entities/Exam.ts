import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import Period from './Period';

export enum statusEnum {
  active = 'active',
  inactive = 'inactive',
}

@Entity('exam')
class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  description: string;

  @Column()
  started_at: Date;

  @Column()
  ended_at: Date;

  @Column()
  llow_anonymous: boolean;

  @Column({ type: 'enum', enum: statusEnum, default: statusEnum.active })
  status: statusEnum;

  @Column()
  url: string;

  @Column()
  period_id: number;

  @OneToOne(() => Period)
  @JoinColumn({ name: 'period_id' })
  period: Period;
}

export default Exam;
