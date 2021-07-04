import { getRepository, Repository } from 'typeorm';

import ICreatePeriod from '@modules/course/dtos/ICreatePeriod';
import IPeriodRepository from '@modules/course/repositories/IPeriodRepository';

import Period from '../entities/Period';

class PeriodRepository implements IPeriodRepository {
  private ormRespository: Repository<Period>;
  constructor() {
    this.ormRespository = getRepository(Period);
  }
  public async findName(name: string): Promise<Period | undefined> {
    const findPeriod = await this.ormRespository.findOne({ name });

    return findPeriod;
  }
  public async create(data: ICreatePeriod): Promise<Period> {
    const createPeriod = this.ormRespository.create(data);
    await this.ormRespository.save(createPeriod);

    return createPeriod;
  }
}

export default PeriodRepository;
