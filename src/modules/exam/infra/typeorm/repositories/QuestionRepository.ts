import { getRepository, Repository } from 'typeorm';

import ICreateQuestion from '@modules/exam/dtos/ICreateQuestion';
import IQuestionRepository from '@modules/exam/repositories/IQuestionRepository';

import Question from '../entities/Question';

class QuestionRepository implements IQuestionRepository {
  private ormRepository: Repository<Question>;

  constructor() {
    this.ormRepository = getRepository(Question);
  }

  public async create(data: ICreateQuestion): Promise<Question> {
    const newQuestion = this.ormRepository.create(data);

    await this.ormRepository.save(newQuestion);

    return newQuestion;
  }
  public async findById(id: number): Promise<Question | undefined> {
    const findQuest = await this.ormRepository.findOne({ where: { id } });

    return findQuest;
  }
  public async findByExamGroupID(
    exam_question_group_id: number,
  ): Promise<Question[]> {
    const findQuest = await this.ormRepository.find({
      where: { exam_question_group_id },
    });

    return findQuest;
  }
}

export default QuestionRepository;