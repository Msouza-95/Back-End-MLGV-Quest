import { Repository } from 'typeorm';

import ICreateQuestionGroup from '@modules/exam/dtos/ICreateQuestionGroup';
import IQuestionGroupRepository from '@modules/exam/repositories/IQuestionGroupRepository';

import QuestionGroup from '../entities/QuestionGroup';

class QuestionGroupRepository implements IQuestionGroupRepository {
  private ormRepository: Repository<QuestionGroup>;

  public async create(data: ICreateQuestionGroup): Promise<QuestionGroup> {
    const newQuestionGroup = this.ormRepository.create(data);

    await this.ormRepository.save(newQuestionGroup);

    return newQuestionGroup;
  }
  public async findById(id: number): Promise<QuestionGroup | undefined> {
    const findQuestionGroup = await this.ormRepository.findOne({
      where: { id },
    });

    return findQuestionGroup;
  }
}

export default QuestionGroupRepository;
