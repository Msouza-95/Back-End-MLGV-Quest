import { DeleteResult, getRepository, Repository, UpdateResult } from 'typeorm';

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
      relations: ['examQuestionGroup'],
      where: { exam_question_group_id },
    });

    return findQuest;
  }

  public async delete(id: number): Promise<DeleteResult> {
    const result = await this.ormRepository.delete(id);

    return result;
  }
  public async upadate(
    id: number,
    data: ICreateQuestion,
  ): Promise<UpdateResult> {
    const result = await this.ormRepository.update(id, data);

    return result;
  }

  public async selectAll(id: number): Promise<Question[]> {
    const questionQuery = this.ormRepository
      .createQueryBuilder('q')
      .where('exam_question_group_id = :id', { id });

    const question = await questionQuery.getMany();

    return question;
  }
}

export default QuestionRepository;
