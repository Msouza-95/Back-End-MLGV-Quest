import ICreateUserAnswerClass from '../dtos/ICreateUserAnswerClass';
import ISelectAnswer from '../dtos/ISelectAnswer';
import UserAnswerClass from '../infra/typeorm/entities/UserAnswerClass';

interface IUserAnswerClassRepository {
  create(data: ICreateUserAnswerClass): Promise<UserAnswerClass>;
  findByID(id: number): Promise<UserAnswerClass | undefined>;
  findAll(data: ISelectAnswer): Promise<any>;
}

export default IUserAnswerClassRepository;
