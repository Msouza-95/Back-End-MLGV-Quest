import ProfessorClass from '../infra/typeorm/entities/ProfessorClass';

interface IProfessorClassRepository {
  findByProfessorID(
    professor_id: number,
  ): Promise<ProfessorClass[] | undefined>;
}

export default IProfessorClassRepository;
