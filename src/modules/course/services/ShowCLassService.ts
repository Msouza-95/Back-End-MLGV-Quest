import { inject, injectable } from 'tsyringe';

import Classs from '../infra/typeorm/entities/Class';
import IClassRepository from '../repositories/IClassRepository';

@injectable()
class ShowCLassService {
  constructor(
    @inject('ClassRepository')
    private classRepository: IClassRepository,
  ) {}

  public async execute(): Promise<Classs[]> {
    const classs = await this.classRepository.find();

    return classs;
  }
}

export default ShowCLassService;
