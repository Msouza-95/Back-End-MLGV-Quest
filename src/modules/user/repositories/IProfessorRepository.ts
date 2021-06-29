import ICreateProfessorDTO from '../dtos/ICreateProfessorDTO';
import Professor from '../infra/typeorm/entities/Professor';

interface IProfessorRepository {
  cratete(data: ICreateProfessorDTO): Promise<Professor>;
}

export default IProfessorRepository;
