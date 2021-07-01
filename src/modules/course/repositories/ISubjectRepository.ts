import Subject from '../infra/typeorm/entities/Subject';

interface ISubjectRepository {
  findByID(subject_id: number): Promise<Subject | undefined>;
}
export default ISubjectRepository;
