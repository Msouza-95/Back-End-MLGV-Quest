import ICreateUserAnswer from '../dtos/ICreateUserAnswer';
import UserAnswer from '../infra/typeorm/entities/UserAnswer';

export default interface IUserAnswerRepository {
  create(data: ICreateUserAnswer): Promise<UserAnswer>;
  findById(id: number): Promise<UserAnswer | undefined>;
}
