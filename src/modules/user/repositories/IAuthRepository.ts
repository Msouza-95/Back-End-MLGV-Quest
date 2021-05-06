import Auth from '../infra/typeorm/entities/Auth';

export default interface IAuthRepository {
  findByUserID(user_id: number): Promise<Auth | undefined>;
}
