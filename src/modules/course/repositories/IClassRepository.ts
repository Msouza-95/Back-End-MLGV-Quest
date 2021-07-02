import Classs from '../infra/typeorm/entities/Class';

interface IClassRepository {
  findByID(class_id: number): Promise<Classs | undefined>;
}

export default IClassRepository;
