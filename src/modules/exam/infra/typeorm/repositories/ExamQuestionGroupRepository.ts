import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

import ICreateExamQuestionGroup from '@modules/exam/dtos/ICreateExamQuestionGroup';
import IIndexQuestion from '@modules/exam/dtos/IIndexQuestion';
import IUpdateQuestionGroup from '@modules/exam/dtos/IUpdateQuestionGroup';
import IExamQuestionGroupRepository from '@modules/exam/repositories/IExamQuestionGroupRepository';

import ExamQuestionGroup from '../entities/ExamQuestionGroup';

class ExamQuestionGroupRepository implements IExamQuestionGroupRepository {
  private ormRepository: Repository<ExamQuestionGroup>;

  constructor() {
    this.ormRepository = getRepository(ExamQuestionGroup);
  }

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

  public async save(exam: ExamQuestionGroup): Promise<ExamQuestionGroup> {
    return this.ormRepository.save(exam);
  }

  public async findByQuestionGroupID(
    question_group_id: number,
  ): Promise<ExamQuestionGroup | undefined> {
    const findExamQuestionGroup = await this.ormRepository.findOne({
      where: { question_group_id },
    });

    return findExamQuestionGroup;
  }

  public async allEquivalente(
    data: IIndexQuestion,
  ): Promise<ExamQuestionGroup[] | undefined> {
    const findExamQuestionGroup = await this.ormRepository.find({
      select: ['id'],
      where: [
        { question_group_id: data.question_group_id, exam_id: data.exam_id },
      ],
    });

    return findExamQuestionGroup;
  }

  public async update(
    id: number,
    data: IUpdateQuestionGroup,
  ): Promise<UpdateResult> {
    const result = await this.ormRepository.update(id, data);
    return result;
  }

  public async findByExamId(
    exam_id: number,
  ): Promise<ExamQuestionGroup[] | undefined> {
    const findGroup = await this.ormRepository.find({ where: { exam_id } });

    return findGroup;
  }
}

export default ExamQuestionGroupRepository;
