import ICreateUserAnswerClass from '@modules/answer/dtos/ICreateUserAnswerClass';
import UserAnswerClass from '@modules/answer/infra/typeorm/entities/UserAnswerClass';

import IUserAnswerClassRepository from '../IUserAnswerClassRepository';

class FakeUserAnswerClassRepository implements IUserAnswerClassRepository {
  private userAnswerClass: UserAnswerClass[] = [];

  public async create(data: ICreateUserAnswerClass): Promise<UserAnswerClass> {
    const nextID = this.userAnswerClass.length + 1;

    const newUserAnswerClass = new UserAnswerClass();

    Object.assign(newUserAnswerClass, { id: nextID }, data);

    this.userAnswerClass.push(newUserAnswerClass);

    return newUserAnswerClass;
  }
  public async findByID(id: number): Promise<UserAnswerClass | undefined> {
    const findUserAnswerClass = this.userAnswerClass.find(
      answerClass => answerClass.id === id,
    );

    return findUserAnswerClass;
  }
}

export default FakeUserAnswerClassRepository;
