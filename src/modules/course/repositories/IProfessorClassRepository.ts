import ICreateProfessorClass from '../dtos/ICreateProfessorClass';
import ProfessorClass from '../infra/typeorm/entities/ProfessorClass';

interface IProfessorClassRepository {
  create(data: ICreateProfessorClass): Promise<ProfessorClass>;
  findByProfessorID(
    professor_id: number,
  ): Promise<ProfessorClass[] | undefined>;
}

export default IProfessorClassRepository;
