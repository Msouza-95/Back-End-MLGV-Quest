import ICreateQuestionGroup from '../dtos/ICreateQuestionGroup';
import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';

export default interface IQuestionGroupRepository {
  create(data: ICreateQuestionGroup): Promise<QuestionGroup>;
  findById(id: number): Promise<QuestionGroup | undefined>;
}
