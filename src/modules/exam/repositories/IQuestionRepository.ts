import ICreateQuestion from '../dtos/ICreateQuestion';
import Question from '../infra/typeorm/entities/Question';

export default interface IQuestionRepository {
  create(data: ICreateQuestion): Promise<Question>;
  findById(id: number): Promise<Question | undefined>;
}