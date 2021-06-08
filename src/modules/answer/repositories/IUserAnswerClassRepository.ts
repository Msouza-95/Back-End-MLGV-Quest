import ICreateUserAnswerClass from '../dtos/ICreateUserAnswerClass';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';

interface IUserAnswerClassRepository {
  create(data: ICreateUserAnswerClass): Promise<UserAnswerClass>;
  findByID(id: number): Promise<UserAnswerClass | undefined>;
}

export default IUserAnswerClassRepository;
