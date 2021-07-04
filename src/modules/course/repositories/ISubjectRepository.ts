import ICreateSubject from '../dtos/ICreateSubject';
import Subject from '../infra/typeorm/entities/Subject';

interface ISubjectRepository {
  create(data: ICreateSubject): Promise<Subject>;
  findByID(subject_id: number): Promise<Subject | undefined>;
}
export default ISubjectRepository;
