import Subject from '../infra/typeorm/entities/Subject';

interface ISubjectRepository {
  create(title: string): Promise<Subject>;
}
export default ISubjectRepository;
