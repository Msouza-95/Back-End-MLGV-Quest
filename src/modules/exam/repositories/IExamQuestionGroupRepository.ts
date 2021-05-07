import ICreateExamQuestionGroup from '../dtos/ICreateExamQuestionGroup';
import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';

export default interface IExamQuestionGroupRepository {
  create(data: ICreateExamQuestionGroup): Promise<ExamQuestionGroup>;
  findById(id: number): Promise<ExamQuestionGroup | undefined>;
}
