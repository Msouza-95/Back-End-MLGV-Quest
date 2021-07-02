import ICreatePeriod from '../dtos/ICreatePeriod';
import Period from '../infra/typeorm/entities/Period';

interface IPeriodRepository {
  create(data: ICreatePeriod): Promise<Period>;
}

export default IPeriodRepository;
