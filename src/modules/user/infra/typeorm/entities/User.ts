import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('user')
class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  enrollment: string;

  @Column()
  type: string;
}

export default User;
