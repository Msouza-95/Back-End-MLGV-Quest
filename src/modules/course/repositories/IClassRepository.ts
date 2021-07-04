import ICreateClass from '../dtos/ICreateClass';
import Classs from '../infra/typeorm/entities/Class';

interface IClassRepository {
  findByID(class_id: number): Promise<Classs | undefined>;
  find(): Promise<Classs[]>;
  create(data: ICreateClass): Promise<Classs>;
}

export default IClassRepository;
