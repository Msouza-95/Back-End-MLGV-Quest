import { getRepository, Repository } from 'typeorm';

import ICreateQuestionGroup from '@modules/exam/dtos/ICreateQuestionGroup';
import IQuestionGroupRepository from '@modules/exam/repositories/IQuestionGroupRepository';

import QuestionGroup from '../entities/QuestionGroup';

class QuestionGroupRepository implements IQuestionGroupRepository {
  private ormRepository: Repository<QuestionGroup>;

  constructor() {
    this.ormRepository = getRepository(QuestionGroup);
  }

  public async create(data: ICreateQuestionGroup): Promise<QuestionGroup> {
    const newGroup = this.ormRepository.create(data);
    await this.ormRepository.save(newGroup);

    return newGroup;
  }

  public async findById(id: number): Promise<QuestionGroup | undefined> {
    const findQuestionGroup = await this.ormRepository.findOne({
      where: { id },
    });

    return findQuestionGroup;
  }

  public async findTitle(title: string): Promise<QuestionGroup | undefined> {
    const findQuestionGroup = await this.ormRepository.findOne({
      where: { title },
    });

    return findQuestionGroup;
  }
}

export default QuestionGroupRepository;
