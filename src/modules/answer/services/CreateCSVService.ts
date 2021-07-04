import { inject, injectable } from 'tsyringe';

import IExamRepository from '@modules/exam/repositories/IExamRepository';

@injectable()
class CreateCSVService {
  constructor(
    @inject('examRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute(exam_id: number): Promise<void> {}
}

export default CreateCSVService;
