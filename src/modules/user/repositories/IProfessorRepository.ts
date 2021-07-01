import Professor from '../infra/typeorm/entities/Professor';

interface IProfessorRepository {
  findByUserID(user_id: number): Promise<Professor | undefined>;
  create(user_id: number): Promise<Professor>;
}

export default IProfessorRepository;
