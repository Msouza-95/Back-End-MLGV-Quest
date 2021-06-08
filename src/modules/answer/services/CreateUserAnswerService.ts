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
  }: IRequest) {}
}
export default CreateUserAnswerService;
