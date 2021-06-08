import ICreateUserAnswer from '@modules/answer/dtos/ICreateUserAnswer';
import UserAnswer from '@modules/answer/infra/typeorm/entities/UserAnswer';

import IUserAnswerRepository from '../IUserAnswerRepository';

class FakeUserAnswerRepository implements IUserAnswerRepository {
  private userAnswers: UserAnswer[] = [];

  public async create(data: ICreateUserAnswer): Promise<UserAnswer> {
    const nextID = this.userAnswers.length + 1;
    const newUserAnswer = new UserAnswer();

    Object.assign(newUserAnswer, { id: nextID }, data);

    this.userAnswers.push(newUserAnswer);

    return newUserAnswer;
  }

  public async findById(id: number): Promise<UserAnswer | undefined> {
    const findUserAnswer = this.userAnswers.find(
      userAnswer => userAnswer.id === id,
    );

    return findUserAnswer;
  }
}

export default FakeUserAnswerRepository;
