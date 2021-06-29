import { inject, injectable } from 'tsyringe';

import IUserRepository from '@modules/user/repositories/IUserRepository';
import AppError from '@shared/errors/AppError';

import IUserAgreementRepository from '../repositories/IUserAgreementRepository';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IRequest {
  exam_id: number;
  user_id: number;
  question_id: number;
  anoymous: boolean;
  score: number;
  comment: Text;
  class_id?: number;
}

@injectable()
class CreateUserAnswerService {
  constructor(
    @inject('UserAnswerRepository')
    private userAnswerRepository: IUserAnswerRepository,
    @inject('UserAgreementRepository')
    private userAgreementRepository: IUserAgreementRepository,
    @inject('UserAnswerClassRepository')
    private userAnswerClassRepository: IUserAnswerClassRepository,
    @inject('UserRepository')
    private userRepository: IUserRepository,
  ) {}

  public async execute({
    exam_id,
    user_id,
    question_id,
    anoymous,
    score,
    comment,
    class_id,
  }: IRequest) {
    // preciso verificar se user já respondeu essa exam

    const userAgreement = await this.userAgreementRepository.findByExamID(
      exam_id,
    );

    if (userAgreement) {
      throw new AppError('User já respondeu Avaliação', 401);
    }

    // verificar se é professor ou auluno

    const user = await this.userRepository.findById(user_id);

    if (user?.type === 'studant') {
    } else {
    }
    // preciso verificar se a resposta é atrlada a discplina ou não
    // se é atrelado a disciplna verificar disciplinas que estão ligadas  e responder o exam
    // não é atrelado a disciplina apenas responder
  }
}

export default CreateUserAnswerService;
