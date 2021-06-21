import { inject, injectable } from 'tsyringe';

import IUserAgreementRepository from '../repositories/IUserAgreementRepository';
import IUserAnswerClassRepository from '../repositories/IUserAnswerClassRepository';
import IUserAnswerRepository from '../repositories/IUserAnswerRepository';

interface IRequest {
  isClass: boolean; // é atrelado a disciplina ?
  exam_id: number;
  user_id: number;
  question_id: number;
  anoymous: boolean;
  score: number;
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
  ) {}

  public async execute({
    isClass,
    exam_id,
    user_id,
    question_id,
    anoymous,
    score,
    class_id,
  }: IRequest) {
    // verificar se é professor ou auluno
    // preciso verificar se user já respondeu essa questão
    // preciso verificar se a resposta é atrlada a discplina ou não
    // se é atrelado a disciplna verificar disciplinas que estão ligadas  e responder o exam
    // não é atrelado a disciplina apenas responder
    if (isClass) {
    }
  }
}

export default CreateUserAnswerService;
