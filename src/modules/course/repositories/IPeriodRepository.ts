import ICreatePeriod from '../dtos/ICreatePeriod';
import Period from '../infra/typeorm/entities/Period';

interface IPeriodRepository {
  create(data: ICreatePeriod): Promise<Period>;
  findName(name: string): Promise<Period | undefined>;
}

export default IPeriodRepository;
