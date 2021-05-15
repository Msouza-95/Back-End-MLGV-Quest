import { inject, injectable } from 'tsyringe';

import QuestionGroup from '../infra/typeorm/entities/QuestionGroup';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';

@injectable()
class ShowQuestionGroupService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
  ) {}
  public async execute(id?: number): Promise<QuestionGroup | QuestionGroup[]> {
    if (id) {
      const questionGroup = await this.questionGroupRepository.findById(id);

      if (questionGroup) {
        return questionGroup;
      }
    }
    const questionGroup = await this.questionGroupRepository.index();
    return questionGroup;
  }
}

export default ShowQuestionGroupService;
