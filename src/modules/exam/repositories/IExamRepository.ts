import ICreateExam from '../dtos/ICreateExam';
import Exam from '../infra/typeorm/entities/Exam';

export default interface IExamRepository {
  create(data: ICreateExam): Promise<Exam>;
  findById(id: number): Promise<Exam | undefined>;
}
