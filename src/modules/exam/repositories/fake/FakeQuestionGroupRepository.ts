import { UpdateResult, DeleteResult } from 'typeorm';

import ICreateQuestionGroup from '@modules/exam/dtos/ICreateQuestionGroup';
import QuestionGroup from '@modules/exam/infra/typeorm/entities/QuestionGroup';

import IQuestionGroupRepository from '../IQuestionGroupRepository';

class FakeQuestionGroupRepository implements IQuestionGroupRepository {
  index(): Promise<QuestionGroup[]> {
    throw new Error('Method not implemented.');
  }
  upadate(id: number, data: ICreateQuestionGroup): Promise<UpdateResult> {
    throw new Error('Method not implemented.');
  }
  delete(id: number): Promise<DeleteResult> {
    throw new Error('Method not implemented.');
  }
  private questionGroups: QuestionGroup[] = [];

  public async create(data: ICreateQuestionGroup): Promise<QuestionGroup> {
    const nextId = this.questionGroups.length + 1;
    const newQuestionGroup = new QuestionGroup();

    Object.assign(newQuestionGroup, { id: nextId }, data);

    this.questionGroups.push(newQuestionGroup);

    return newQuestionGroup;
  }
  public async findById(id: number): Promise<QuestionGroup | undefined> {
    const findQuesntionGroup = this.questionGroups.find(
      quest => quest.id === id,
    );

    return findQuesntionGroup;
  }

  public async findTitle(title: string): Promise<QuestionGroup | undefined> {
    const findQuesntionGroup = this.questionGroups.find(
      quest => quest.title === title,
    );

    return findQuesntionGroup;
  }
}

export default FakeQuestionGroupRepository;
