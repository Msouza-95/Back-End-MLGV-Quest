import ICreateUserDTO from '../dtos/ICreateUserDTO';
import Auth from '../infra/typeorm/entities/Auth';

export default interface IAuthRepository {
  findByUserID(user_id: number): Promise<Auth | undefined>;
  create(user_id: number, password: string): Promise<Auth>;
}
