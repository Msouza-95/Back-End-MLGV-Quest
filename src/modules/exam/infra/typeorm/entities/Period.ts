import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Period;
