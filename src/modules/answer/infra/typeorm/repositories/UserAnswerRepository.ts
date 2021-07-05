import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswer from '@modules/answer/dtos/ICreateUserAnswer';
import ISelectAnswer from '@modules/answer/dtos/ISelectAnswer';
import IUserAnswerRepository from '@modules/answer/repositories/IUserAnswerRepository';

import UserAnswer from '../entities/UserAnswer';

class UserAnswerRepository implements IUserAnswerRepository {
  private ormRepository: Repository<UserAnswer>;

  constructor() {
    this.ormRepository = getRepository(UserAnswer);
  }

  public async create(data: ICreateUserAnswer): Promise<UserAnswer> {
    const newUserAnswer = this.ormRepository.create(data);

    await this.ormRepository.save(newUserAnswer);

    return newUserAnswer;
  }
  '';
  public async findById(id: number): Promise<UserAnswer | undefined> {
    const findAnswer = await this.ormRepository.findOne({ where: { id } });

    return findAnswer;
  }

  public async findAll(data: ISelectAnswer): Promise<any> {
    const { exam_id, user_id } = data;
    const Query = this.ormRepository.query(
      'select u.score , u.question_id, ag.exam_id , ag.user_id ,ag.comment from userAnswer as u inner join userAgreement as ag on u.user_agreement_id = ag.id where ag.exam_id =? and ag.user_id = ?',
      [exam_id, user_id],
    );

    return Query;
  }
}

export default UserAnswerRepository;
