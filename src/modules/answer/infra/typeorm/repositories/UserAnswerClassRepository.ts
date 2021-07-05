import { getRepository, Repository } from 'typeorm';

import ICreateUserAnswerClass from '@modules/answer/dtos/ICreateUserAnswerClass';
import ISelectAnswer from '@modules/answer/dtos/ISelectAnswer';
import IUserAnswerClassRepository from '@modules/answer/repositories/IUserAnswerClassRepository';

import UserAnswerClass from '../entities/UserAnswerClass';

class UserAnswerClassRepository implements IUserAnswerClassRepository {
  private ormRepository: Repository<UserAnswerClass>;

  constructor() {
    this.ormRepository = getRepository(UserAnswerClass);
  }

  public async create(data: ICreateUserAnswerClass): Promise<UserAnswerClass> {
    const newAnswerClass = this.ormRepository.create(data);

    await this.ormRepository.save(newAnswerClass);
    return newAnswerClass;
  }
  public async findByID(id: number): Promise<UserAnswerClass | undefined> {
    const findAnswerClass = await this.ormRepository.findOne({ where: { id } });

    return findAnswerClass;
  }

  public async findAll(data: ISelectAnswer): Promise<any> {
    const { exam_id, user_id } = data;
    const Query = this.ormRepository.query(
      'select ac.class_id ,ac.score , u.question_id, ag.exam_id , ag.user_id ,ag.comment from userAnswer as u inner join userAgreement as ag on u.user_agreement_id = ag.id inner join userAnswerClass as ac on ac.user_answer_id = u.id where ag.exam_id =? and ag.user_id =?',
      [exam_id, user_id],
    );

    return Query;
  }
}

export default UserAnswerClassRepository;
