import ICreateUserAnswer from '../dtos/ICreateUserAnswer';
import ISelectAnswer from '../dtos/ISelectAnswer';
import UserAnswer from '../infra/typeorm/entities/UserAnswer';

export default interface IUserAnswerRepository {
  create(data: ICreateUserAnswer): Promise<UserAnswer>;
  findById(id: number): Promise<UserAnswer | undefined>;
  findAll(data: ISelectAnswer): Promise<any>;
}
