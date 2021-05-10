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

  @OneToOne(() => Period)
  @JoinColumn({ name: 'period_id' })
  period: Period;
}

export default Exam;
