import ICreateQuestion from '@modules/exam/dtos/ICreateQuestion';
import Question from '@modules/exam/infra/typeorm/entities/Question';

import IQuestionRepository from '../IQuestionRepository';

class FakeQuestionRepository implements IQuestionRepository {
  private questions: Question[] = [];

  public async create(data: ICreateQuestion): Promise<Question> {
    const nextId = this.questions.length + 1;
    const newQuestion = new Question();

    Object.assign(newQuestion, { id: nextId }, data);

    this.questions.push(newQuestion);

    return newQuestion;
  }
  public async findById(id: number): Promise<Question | undefined> {
    const findQuesntionGroup = this.questions.find(quest => quest.id === id);

    return findQuesntionGroup;
  }
}

export default FakeQuestionRepository;
