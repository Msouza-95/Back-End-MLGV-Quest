import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import Professor from './Professor';
import StudentClass from './StudentClass';

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

  // relation

  @OneToMany(() => Professor, professor => professor.user)
  professors: Professor[];

  @OneToMany(() => StudentClass, studentClass => studentClass.user)
  studentClass: StudentClass[];
}

export default User;
