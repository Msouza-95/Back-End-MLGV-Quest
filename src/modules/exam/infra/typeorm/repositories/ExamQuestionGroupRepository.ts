import ICreateExamQuestionGroup from '@modules/exam/dtos/ICreateExamQuestionGroup';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';
import { Repository } from 'typeorm';

import ExamQuestionGroup from '../entities/ExamQuestionGroup';

class ExamQuestionGroupRepository implements IExamQuestionGroupRepository {
  private ormRepository: Repository<ExamQuestionGroup>;

  public async create(
    data: ICreateExamQuestionGroup,
  ): Promise<ExamQuestionGroup> {
    const newExamQuestionGroup = this.ormRepository.create(data);

    await this.ormRepository.save(newExamQuestionGroup);

    return newExamQuestionGroup;
  }
  public async findById(id: number): Promise<ExamQuestionGroup | undefined> {
    const findExamQuestionGroup = await this.ormRepository.findOne({
      where: { id },
    });

    return findExamQuestionGroup;
  }
}

export default ExamQuestionGroupRepository;
