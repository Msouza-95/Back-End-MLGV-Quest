import { inject, injectable } from 'tsyringe';

import IExamRepository from '@modules/exam/repositories/IExamRepository';
import AppError from '@shared/errors/AppError';

interface IResponse {
  groupquestion: string;
  class: string;
  question: string;
  user: string;
  matricula: string;
  media?: number;
  coments: string;
  codigo: number;
}

@injectable()
class CreateCSVService {
  private responses: IResponse[] = [];
  constructor(
    @inject('ExamRepository')
    private examRepository: IExamRepository,
  ) {}

  public async execute(exam_id: number): Promise<IResponse[]> {
    console.log(exam_id);
    const examQuery = await this.examRepository.queryCSV(exam_id);
    if (!examQuery) {
      throw new AppError('não achou nada');
    }

    console.log(examQuery);
    const promisesQuery = examQuery.map(async query => {
      const {
        Disciplina,
        group_title,
        Questao,
        Usuarios,
        Matricula,
        Comentario,
        Codigo,
      } = query;

      const res = {
        groupquestion: group_title,
        class: Disciplina,
        question: Questao,
        user: Usuarios,
        matricula: Matricula,
        coments: Comentario,
        codigo: Codigo,
      };

      this.responses.push(res);
    });

    await Promise.all(promisesQuery);

    return this.responses;
  }
}

export default CreateCSVService;
