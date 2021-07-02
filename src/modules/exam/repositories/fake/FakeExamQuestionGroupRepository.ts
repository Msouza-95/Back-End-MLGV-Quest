import { UpdateResult } from 'typeorm';

import ICreateExamQuestionGroup from '@modules/exam/dtos/ICreateExamQuestionGroup';
import IIndexQuestion from '@modules/exam/dtos/IIndexQuestion';
import IUpdateQuestionGroup from '@modules/exam/dtos/IUpdateQuestionGroup';
import Exam from '@modules/exam/infra/typeorm/entities/Exam';
import ExamQuestionGroup from '@modules/exam/infra/typeorm/entities/ExamQuestionGroup';

import IExamQuestionGroupRepository from '../IExamQuestionGroupRepository';

class FakeExamQuestionGroupRepository implements IExamQuestionGroupRepository {
  private examQuestionGroup: ExamQuestionGroup[] = [];

  public async save(exam: ExamQuestionGroup): Promise<ExamQuestionGroup> {
    throw new Error('Method not implemented.');
  }
  public async create(
    data: ICreateExamQuestionGroup,
  ): Promise<ExamQuestionGroup> {
    const nextId = this.examQuestionGroup.length + 1;

    const newExamQuestionGroup = new ExamQuestionGroup();

    Object.assign(newExamQuestionGroup, { id: nextId }, data);

    this.examQuestionGroup.push(newExamQuestionGroup);

    return newExamQuestionGroup;
  }
  public async findById(id: number): Promise<ExamQuestionGroup | undefined> {
    const findExamQuestionGroup = this.examQuestionGroup.find(
      examQuestionGroup => examQuestionGroup.id === id,
    );

    return findExamQuestionGroup;
  }
  public async findByQuestionGroupID(
    question_group_id: number,
  ): Promise<ExamQuestionGroup | undefined> {
    throw new Error('Method not implemented.');
  }
  public async findByExamId(
    exam_id: number,
  ): Promise<ExamQuestionGroup[] | undefined> {
    throw new Error('Method not implemented.');
  }
  public async allEquivalente(
    data: IIndexQuestion,
  ): Promise<ExamQuestionGroup[] | undefined> {
    const findExamQuestionGroup = await this.examQuestionGroup.find(
      exam =>
        exam.exam_id === data.exam_id &&
        exam.question_group_id === data.question_group_id,
    );
    const examQuestionGroups: ExamQuestionGroup[] = [];
    if (findExamQuestionGroup) {
      examQuestionGroups.push(findExamQuestionGroup);

      return examQuestionGroups;
    }

    return examQuestionGroups;
  }
  public async update(
    id: number,
    data: IUpdateQuestionGroup,
  ): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }
}

export default FakeExamQuestionGroupRepository;
