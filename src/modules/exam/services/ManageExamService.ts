import { inject, injectable } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import ExamQuestionGroup from '../infra/typeorm/entities/ExamQuestionGroup';
import IExamQuestionGroupRepository from '../repositories/IExamQuestionGroupRepository';
import IQuestionGroupRepository from '../repositories/IQuestionGroupRepository';
import IQuestionRepository from '../repositories/IQuestionRepository';

interface IRequest {
  exam_id: number;
  question_group_id: number;
}

@injectable()
class ManageExamService {
  constructor(
    @inject('QuestionGroupRepository')
    private questionGroupRepository: IQuestionGroupRepository,
    @inject('ExamQuestionGroupRepository')
    private examQuestionGroupRepository: IExamQuestionGroupRepository,
  ) {}

  public async execute({
    exam_id,
    question_group_id,
  }: IRequest): Promise<ExamQuestionGroup> {
    const examQuestionGroup = await this.examQuestionGroupRepository.findByQuestionGroupID(
      question_group_id,
    );

    if (!examQuestionGroup) {
      throw new AppError('QuestionGroup Invalid');
    }

    examQuestionGroup.exam_id = exam_id;
    /* verificar se existe uma campo com exam_id e questionGroup_id que foi recebido
  se sim o grupo ja ta atrelado ao exama
  senão verificar se tem algum campo com qeustiongroup_id preencido e exam_id não
  se sim set exam_id com exam_id reebido
  senao cria uma novo registro
    */

    // const examquestion = await this.examQuestionGroupRepository.save(
    //   examQuestionGroup,
    // );

    return examquestion;
  }
}

export default ManageExamService;
